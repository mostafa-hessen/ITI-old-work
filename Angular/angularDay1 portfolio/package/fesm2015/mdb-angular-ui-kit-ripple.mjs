import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i0 from '@angular/core';
import { Directive, Input, HostBinding, HostListener, NgModule } from '@angular/core';

const DEFAULT_RIPPLE_COLOR = [0, 0, 0];
function durationToMsNumber(time) {
    return Number(time.replace('ms', '').replace('s', '000'));
}
function colorToRGB(color) {
    // eslint-disable-next-line no-shadow,@typescript-eslint/no-shadow
    function hexToRgb(color) {
        const HEX_COLOR_LENGTH = 7;
        const IS_SHORT_HEX = color.length < HEX_COLOR_LENGTH;
        if (IS_SHORT_HEX) {
            color = `#${color[1]}${color[1]}${color[2]}${color[2]}${color[3]}${color[3]}`;
        }
        return [
            parseInt(color.substr(1, 2), 16),
            parseInt(color.substr(3, 2), 16),
            parseInt(color.substr(5, 2), 16),
        ];
    }
    // eslint-disable-next-line no-shadow,@typescript-eslint/no-shadow
    function namedColorsToRgba(color) {
        const tempElem = document.body.appendChild(document.createElement('fictum'));
        const flag = 'rgb(1, 2, 3)';
        tempElem.style.color = flag;
        if (tempElem.style.color !== flag) {
            return DEFAULT_RIPPLE_COLOR;
        }
        tempElem.style.color = color;
        if (tempElem.style.color === flag || tempElem.style.color === '') {
            return DEFAULT_RIPPLE_COLOR;
        } // color parse failed
        color = getComputedStyle(tempElem).color;
        document.body.removeChild(tempElem);
        return color;
    }
    // eslint-disable-next-line no-shadow, @typescript-eslint/no-shadow
    function rgbaToRgb(color) {
        color = color.match(/[.\d]+/g).map((a) => +Number(a));
        color.length = 3;
        return color;
    }
    if (color.toLowerCase() === 'transparent') {
        return DEFAULT_RIPPLE_COLOR;
    }
    if (color[0] === '#') {
        return hexToRgb(color);
    }
    if (color.indexOf('rgb') === -1) {
        color = namedColorsToRgba(color);
    }
    if (color.indexOf('rgb') === 0) {
        return rgbaToRgb(color);
    }
    return DEFAULT_RIPPLE_COLOR;
}
function getDiameter({ offsetX, offsetY, height, width, }) {
    const top = offsetY <= height / 2;
    const left = offsetX <= width / 2;
    const pythagorean = (sideA, sideB) => Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
    const positionCenter = offsetY === height / 2 && offsetX === width / 2;
    // mouse position on the quadrants of the coordinate system
    const quadrant = {
        first: top === true && left === false,
        second: top === true && left === true,
        third: top === false && left === true,
        fourth: top === false && left === false,
    };
    const getCorner = {
        topLeft: pythagorean(offsetX, offsetY),
        topRight: pythagorean(width - offsetX, offsetY),
        bottomLeft: pythagorean(offsetX, height - offsetY),
        bottomRight: pythagorean(width - offsetX, height - offsetY),
    };
    let diameter = 0;
    if (positionCenter || quadrant.fourth) {
        diameter = getCorner.topLeft;
    }
    else if (quadrant.third) {
        diameter = getCorner.topRight;
    }
    else if (quadrant.second) {
        diameter = getCorner.bottomRight;
    }
    else if (quadrant.first) {
        diameter = getCorner.bottomLeft;
    }
    return diameter * 2;
}

const TRANSITION_BREAK_OPACITY = 0.5;
const GRADIENT = 'rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%';
const BOOTSTRAP_COLORS = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
];
class MdbRippleDirective {
    constructor(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._rippleCentered = false;
        this.rippleColor = '';
        this.rippleDuration = '500ms';
        this.rippleRadius = 0;
        this._rippleUnbound = false;
        this.ripple = true;
    }
    get rippleCentered() {
        return this._rippleCentered;
    }
    set rippleCentered(value) {
        this._rippleCentered = coerceBooleanProperty(value);
    }
    get rippleUnbound() {
        return this._rippleUnbound;
    }
    set rippleUnbound(value) {
        this._rippleUnbound = coerceBooleanProperty(value);
    }
    get host() {
        return this._elementRef.nativeElement;
    }
    _createRipple(event) {
        const { layerX, layerY } = event;
        const offsetX = layerX;
        const offsetY = layerY;
        const height = this.host.offsetHeight;
        const width = this.host.offsetWidth;
        const duration = durationToMsNumber(this.rippleDuration);
        const diameterOptions = {
            offsetX: this.rippleCentered ? height / 2 : offsetX,
            offsetY: this.rippleCentered ? width / 2 : offsetY,
            height,
            width,
        };
        const diameter = getDiameter(diameterOptions);
        const radiusValue = this.rippleRadius || diameter / 2;
        const opacity = {
            delay: duration * TRANSITION_BREAK_OPACITY,
            duration: duration - duration * TRANSITION_BREAK_OPACITY,
        };
        const styles = {
            left: this.rippleCentered ? `${width / 2 - radiusValue}px` : `${offsetX - radiusValue}px`,
            top: this.rippleCentered ? `${height / 2 - radiusValue}px` : `${offsetY - radiusValue}px`,
            height: `${this.rippleRadius * 2 || diameter}px`,
            width: `${this.rippleRadius * 2 || diameter}px`,
            transitionDelay: `0s, ${opacity.delay}ms`,
            transitionDuration: `${duration}ms, ${opacity.duration}ms`,
        };
        const rippleHTML = this._renderer.createElement('div');
        this._createHTMLRipple(this.host, rippleHTML, styles);
        this._removeHTMLRipple(rippleHTML, duration);
    }
    _createHTMLRipple(wrapper, ripple, styles) {
        Object.keys(styles).forEach((property) => (ripple.style[property] = styles[property]));
        this._renderer.addClass(ripple, 'ripple-wave');
        if (this.rippleColor !== '') {
            this._removeOldColorClasses(wrapper);
            this._addColor(ripple, wrapper);
        }
        this._toggleUnbound(wrapper);
        this._appendRipple(ripple, wrapper);
    }
    _removeHTMLRipple(ripple, duration) {
        setTimeout(() => {
            if (ripple) {
                ripple.remove();
            }
        }, duration);
    }
    _appendRipple(target, parent) {
        const FIX_ADD_RIPPLE_EFFECT = 50; // delay for active animations
        this._renderer.appendChild(parent, target);
        setTimeout(() => {
            this._renderer.addClass(target, 'active');
        }, FIX_ADD_RIPPLE_EFFECT);
    }
    _toggleUnbound(target) {
        if (this.rippleUnbound) {
            this._renderer.addClass(target, 'ripple-surface-unbound');
        }
        else {
            this._renderer.removeClass(target, 'ripple-surface-unbound');
        }
    }
    _addColor(target, parent) {
        const isBootstrapColor = BOOTSTRAP_COLORS.find((color) => color === this.rippleColor.toLowerCase());
        if (isBootstrapColor) {
            this._renderer.addClass(parent, `${'ripple-surface'}-${this.rippleColor.toLowerCase()}`);
        }
        else {
            const rgbValue = colorToRGB(this.rippleColor).join(',');
            const gradientImage = GRADIENT.split('{{color}}').join(`${rgbValue}`);
            target.style.backgroundImage = `radial-gradient(circle, ${gradientImage})`;
        }
    }
    _removeOldColorClasses(target) {
        const REGEXP_CLASS_COLOR = new RegExp(`${'ripple-surface'}-[a-z]+`, 'gi');
        const PARENT_CLASSS_COLOR = target.classList.value.match(REGEXP_CLASS_COLOR) || [];
        PARENT_CLASSS_COLOR.forEach((className) => {
            this._renderer.removeClass(target, className);
        });
    }
}
MdbRippleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbRippleDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
MdbRippleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.2", type: MdbRippleDirective, selector: "[mdbRipple]", inputs: { rippleCentered: "rippleCentered", rippleColor: "rippleColor", rippleDuration: "rippleDuration", rippleRadius: "rippleRadius", rippleUnbound: "rippleUnbound" }, host: { listeners: { "click": "_createRipple($event)" }, properties: { "class.ripple-surface": "this.ripple" } }, exportAs: ["mdbRipple"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbRippleDirective, decorators: [{
            type: Directive,
            args: [{
                    // eslint-disable-next-line @angular-eslint/directive-selector
                    selector: '[mdbRipple]',
                    exportAs: 'mdbRipple',
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { rippleCentered: [{
                type: Input
            }], rippleColor: [{
                type: Input
            }], rippleDuration: [{
                type: Input
            }], rippleRadius: [{
                type: Input
            }], rippleUnbound: [{
                type: Input
            }], ripple: [{
                type: HostBinding,
                args: ['class.ripple-surface']
            }], _createRipple: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class MdbRippleModule {
}
MdbRippleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbRippleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MdbRippleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.2", ngImport: i0, type: MdbRippleModule, declarations: [MdbRippleDirective], exports: [MdbRippleDirective] });
MdbRippleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbRippleModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.2", ngImport: i0, type: MdbRippleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [MdbRippleDirective],
                    imports: [],
                    exports: [MdbRippleDirective],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { MdbRippleDirective, MdbRippleModule };
//# sourceMappingURL=mdb-angular-ui-kit-ripple.mjs.map
//# sourceMappingURL=mdb-angular-ui-kit-ripple.mjs.map
