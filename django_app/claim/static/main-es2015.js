(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+2Ah":
/*!************************************!*\
  !*** ./src/app/login/login-2FA.ts ***!
  \************************************/
/*! exports provided: TwoFactorDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoFactorDialog", function() { return TwoFactorDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class TwoFactorDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    close2FA() {
        this.dialogRef.close(this.twoFactor);
    }
    cancel2FA() {
        this.dialogRef.close();
    }
}
TwoFactorDialog.ɵfac = function TwoFactorDialog_Factory(t) { return new (t || TwoFactorDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
TwoFactorDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwoFactorDialog, selectors: [["login-2fa"]], decls: 12, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "outline"], ["matInput", "", "type", "number", "cdkFocusInitial", "", 3, "ngModel", "ngModelChange", "keydown.enter"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "mat-dialog-close"]], template: function TwoFactorDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "2FA Code Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TwoFactorDialog_Template_input_ngModelChange_6_listener($event) { return ctx.twoFactor = $event; })("keydown.enter", function TwoFactorDialog_Template_input_keydown_enter_6_listener() { return ctx.close2FA(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TwoFactorDialog_Template_button_click_8_listener() { return ctx.cancel2FA(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Verify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.twoFactor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.twoFactor);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    \n    \n    input[type=number][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n    }"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tmunzer/4_dev/Mist/installer/src_angular/src/main.ts */"zUnb");


/***/ }),

/***/ "6bIR":
/*!****************************************!*\
  !*** ./src/app/common/common-claim.ts ***!
  \****************************************/
/*! exports provided: ClaimDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimDialog", function() { return ClaimDialog; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _common_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-error */ "Popb");
/* harmony import */ var _common_claim_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-claim-details */ "hzNB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
















function ClaimDialog_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Claim Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function ClaimDialog_div_5_Template_input_keydown_enter_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.add(); })("ngModelChange", function ClaimDialog_div_5_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r9.inputClaimCodes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimDialog_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.inputClaimCodes);
} }
function ClaimDialog_div_7_mat_card_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClaimDialog_div_7_mat_card_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const claimCode_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", claimCode_r12.reason)("aria-label", claimCode_r12.reason);
} }
function ClaimDialog_div_7_mat_card_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClaimDialog_div_7_mat_card_1_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "content_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClaimDialog_div_7_mat_card_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimDialog_div_7_mat_card_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const claimCode_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.remove(claimCode_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClaimDialog_div_7_mat_card_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimDialog_div_7_mat_card_1_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25); const claimCode_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r23.edit(claimCode_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { error: a0, warning: a1 }; };
function ClaimDialog_div_7_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ClaimDialog_div_7_mat_card_1_Template_input_ngModelChange_2_listener($event) { const claimCode_r12 = ctx.$implicit; return claimCode_r12.code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ClaimDialog_div_7_mat_card_1_div_4_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ClaimDialog_div_7_mat_card_1_div_5_Template, 3, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ClaimDialog_div_7_mat_card_1_div_6_Template, 3, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ClaimDialog_div_7_mat_card_1_div_7_Template, 3, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ClaimDialog_div_7_mat_card_1_button_8_Template, 3, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ClaimDialog_div_7_mat_card_1_button_9_Template, 3, 0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const claimCode_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](9, _c0, !claimCode_r12.valid, claimCode_r12.duplicated));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", claimCode_r12.code)("readonly", claimCode_r12.readonly);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", claimCode_r12.processed && claimCode_r12.success);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", claimCode_r12.processed && !claimCode_r12.success && claimCode_r12.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !claimCode_r12.processed && !claimCode_r12.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !claimCode_r12.processed && claimCode_r12.duplicated);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !claimCode_r12.processed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !claimCode_r12.processed);
} }
function ClaimDialog_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ClaimDialog_div_7_mat_card_1_Template, 10, 12, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.claimCodes);
} }
function ClaimDialog_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimDialog_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ClaimDialog_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimDialog_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Claim");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r3.claimButtonDisabled);
} }
function ClaimDialog_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimDialog_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r4.isWorking);
} }
function ClaimDialog_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimDialog_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.details(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r5.isWorking);
} }
function ClaimDialog_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ClaimDialog_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r6.isWorking);
} }
class ClaimDialog {
    constructor(dialogRef, _http, _dialog, data) {
        this.dialogRef = dialogRef;
        this._http = _http;
        this._dialog = _dialog;
        this.data = data;
        this.claimCodes = [];
        this.claimButtonDisabled = true;
        this.inputClaimCodes = "";
        this.body = this.data.body;
        this.isDone = false;
        this.claimResult = {};
        this.isWorking = false;
    }
    add() {
        var regex = /^[0-9a-zA-Z]{5}-?[0-9a-zA-Z]{5}-?[0-9a-zA-Z]{5}$/i;
        this.inputClaimCodes.split(/[\s,; ]+/).forEach(element => {
            var claim = element.replace(";", "").replace(",", "").trim().toUpperCase();
            if (claim.length > 0) {
                var newClaim = { code: claim, success: null, reason: null, duplicated: false, valid: false, processed: false };
                if (newClaim.code.match(regex)) {
                    newClaim.valid = true;
                }
                this.claimCodes.forEach(element => {
                    if (element.code == newClaim.code) {
                        element.duplicated = true;
                        newClaim.duplicated = true;
                    }
                });
                this.claimCodes.push(newClaim);
            }
        });
        this.check_issues();
        this.inputClaimCodes = "";
    }
    edit(claimCode) {
        this.inputClaimCodes = claimCode.code;
        var index = this.claimCodes.indexOf(claimCode);
        this.claimCodes.splice(index, 1);
    }
    check_issues() {
        var issues = {
            invalid: [],
            duplicated: []
        };
        this.claimCodes.forEach(element => {
            if (element.valid == false) {
                issues.invalid.push(element.code);
            }
            if (element.duplicated == true) {
                issues.duplicated.push(element.code);
            }
        });
        if (this.claimCodes.length > 0 && issues.duplicated.length == 0 && issues.invalid.length == 0) {
            this.claimButtonDisabled = false;
        }
        else {
            this.claimButtonDisabled = true;
        }
    }
    remove(claimCode) {
        var duplicated_codes = [];
        var index = -1;
        // remove the claim code
        index = this.claimCodes.indexOf(claimCode);
        if (index >= 0) {
            this.claimCodes.splice(index, 1);
        }
        // if the removed claim code has the duplicated flag
        if (claimCode.duplicated) {
            // find other same codes
            this.claimCodes.forEach(element => {
                if (element.code == claimCode.code) {
                    duplicated_codes.push(element);
                }
            });
            // if only one other same code, remove the duplicated flash
            if (duplicated_codes.length == 1) {
                index = this.claimCodes.indexOf(duplicated_codes[0]);
                this.claimCodes[index].duplicated = false;
            }
        }
        // check issues for "claim" button
        this.check_issues();
    }
    // CLAIM NEW CODES
    confirm() {
        this.isWorking = true;
        this.isDone = true;
        // Add claim codes to request body
        this.body.claim_codes = [];
        this.claimCodes.forEach(element => {
            this.body.claim_codes.push(element.code);
        });
        // Send request to server
        this._http.post('/api/devices/claim/', this.body).subscribe({
            next: data => {
                // retrieve result data
                this.claimResult = data.results;
                this.claimCodes.forEach(element => {
                    element.processed = true;
                    var index = -1;
                    // if code added to account
                    if (this.claimResult["added"].indexOf(element.code) >= 0) {
                        element.success = true;
                        // if error when adding the code
                    }
                    else if (this.claimResult["error"].indexOf(element.code) >= 0) {
                        index = this.claimResult["error"].indexOf(element.code);
                        element.success = false;
                        element.reason = this.claimResult["reason"][index];
                        // if code already claimed somewhere
                    }
                    else if (this.claimResult["duplicated"].indexOf(element.code) >= 0) {
                        element.success = false;
                        element.reason = "Already Claimed";
                    }
                });
                this.isWorking = false;
            },
            error: error => {
                var message = "Unable to create claim the devices... ";
                if ("error" in error) {
                    message += error["error"]["message"];
                }
                this.openError(message);
                this.isWorking = false;
            }
        });
    }
    // EXIT
    cancel() {
        this.dialogRef.close();
    }
    // DIALOG BOXES
    // Restart Claim Process
    reset() {
        const dialogRef = this._dialog.open(ClaimDialog, {
            data: { body: this.body }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.dialogRef.close();
        });
    }
    // DETAILS
    details() {
        console.log(this.claimResult);
        const dialogRef = this._dialog.open(_common_claim_details__WEBPACK_IMPORTED_MODULE_2__["ClaimDetailsDialog"], {
            data: this.claimResult
        });
    }
    // ERROR
    openError(message) {
        const dialogRef = this._dialog.open(_common_error__WEBPACK_IMPORTED_MODULE_1__["ErrorDialog"], {
            data: message
        });
    }
}
ClaimDialog.ɵfac = function ClaimDialog_Factory(t) { return new (t || ClaimDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ClaimDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ClaimDialog, selectors: [["common-claim"]], decls: 14, vars: 7, consts: [["mat-dialog-title", ""], ["mat-dialog-content", "", "fxLayout", "column"], [2, "margin", "0 1em 1em", "color", "gray", "font-size", "small"], ["fxLayout", "row", "fxFill", "", "style", "padding: 0 2em", 4, "ngIf"], [2, "max-width", "80em", "min-width", "20em"], ["fxFlex", "1 1 0", "fxLayout", "row wrap", "style", "width: 100%;", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "disabled", "click", 4, "ngIf"], ["mat-button", "", 3, "disabled", "click", 4, "ngIf"], ["fxLayout", "row", "fxFill", "", 2, "padding", "0 2em"], ["fxFill", ""], ["matInput", "", "placeholder", "ABCDE-12345-F6G7H", "cdkFocusInitial", "", 3, "ngModel", "keydown.enter", "ngModelChange"], ["mat-icon-button", "", 1, "add-icon", 2, "height", "100%", 3, "click"], ["matTooltip", "Add Claim Codes", "aria-label", "Add Claim Codes"], ["fxFlex", "1 1 0", "fxLayout", "row wrap", 2, "width", "100%"], ["fxLayout", "row", "style", "background-color: #eeeeee; margin:5px; border-radius: 1.7em; padding: 0; height: 4em;", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 2, "background-color", "#eeeeee", "margin", "5px", "border-radius", "1.7em", "padding", "0", "height", "4em"], [1, "claim-code", 2, "margin", "0 1em", "width", "11em", 3, "ngClass"], ["matInput", "", 3, "ngModel", "readonly", "ngModelChange"], ["fxLayout", "row", 2, "padding-bottom", "0.5em", "margin-right", "1em"], ["style", "height: 100%;", "class", "success icon-text", 4, "ngIf"], ["style", "height: 100%;", "class", "error icon-text", 4, "ngIf"], ["style", "height: 100%;", "class", "warning icon-text", 4, "ngIf"], ["mat-icon-button", "", "style", "height: 100%;", "class", "delete-icon", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "style", "height: 100%;", "class", "add-icon", 3, "click", 4, "ngIf"], [1, "success", "icon-text", 2, "height", "100%"], ["matTooltip", "Claim Code Added", "aria-label", "Claim Code Added"], [1, "error", "icon-text", 2, "height", "100%"], [3, "matTooltip", "aria-label"], ["matTooltip", "Invalid Format", "aria-label", "Invalid Format"], [1, "warning", "icon-text", 2, "height", "100%"], ["matTooltip", "Duplicated Claim Code", "aria-label", "Duplicated Claim Code"], ["mat-icon-button", "", 1, "delete-icon", 2, "height", "100%", 3, "click"], ["matTooltip", "Delete Claim Code", "aria-label", "Delete Claim Code"], ["matTooltip", "Edit Claim Code", "aria-label", "Edit Claim Code"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "disabled", "click"], ["mat-button", "", 3, "disabled", "click"]], template: function ClaimDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Claim new devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "HINT: you can paste mutliple claim codes separated by a SPACE, a COMMA or a SEMICOLUMN");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ClaimDialog_div_5_Template, 8, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ClaimDialog_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ClaimDialog_button_9_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ClaimDialog_button_10_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ClaimDialog_button_11_Template, 2, 1, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ClaimDialog_button_12_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ClaimDialog_button_13_Template, 2, 1, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.claimCodes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDone);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["FlexFillDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_14__["DefaultClassDirective"]], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n        -webkit-appearance: none;\n        margin: 0;\n    }\n    \n    \n    .icon-text[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        cursor: default;\n    }\n    \n    input[type=number][_ngcontent-%COMP%] {\n        -moz-appearance: textfield;\n    }\n    \n    .delete-icon[_ngcontent-%COMP%] {\n        color: #333;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .delete-icon[_ngcontent-%COMP%]:hover {\n        color: red;\n    }\n    \n    .add-icon[_ngcontent-%COMP%] {\n        color: #333;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .add-icon[_ngcontent-%COMP%]:hover {\n        color: green;\n    }\n    \n    .claim-code-input[_ngcontent-%COMP%] {\n        background-color: white;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .claim-code[_ngcontent-%COMP%] {\n        color: black;\n        transition: color 250ms ease-in-out;\n    }\n    \n    .success[_ngcontent-%COMP%] {\n        color: green;\n    }\n    \n    .warning[_ngcontent-%COMP%] {\n        color: coral;\n    }\n    \n    .error[_ngcontent-%COMP%] {\n        color: red;\n    }"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IMNj":
/*!**************************************!*\
  !*** ./src/app/org/org.component.ts ***!
  \**************************************/
/*! exports provided: OrgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgComponent", function() { return OrgComponent; });
/* harmony import */ var _common_common_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../common/common-error */ "Popb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../connector.service */ "l5d9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");

















function OrgComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const org_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", org_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](org_r7.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](org_r7.name);
} }
function OrgComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Installer View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-slide-toggle", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function OrgComponent_div_10_Template_mat_slide_toggle_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.changeRole($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Admin View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r1.adminMode);
} }
function OrgComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 20);
} }
function OrgComponent_mat_progress_bar_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 21);
} }
function OrgComponent_mat_card_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Please Select an Organization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgComponent_mat_card_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " You don't have access to any Site in this Organization. Please chose another Organization. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Only the Sites Installers with the \"Installer\" authorizations are listed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgComponent_mat_card_22_div_13_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgComponent_mat_card_22_div_13_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const site_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.changeInstaller(site_r10, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Installer Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgComponent_mat_card_22_div_13_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgComponent_mat_card_22_div_13_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const site_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.changeInstaller(site_r10, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Remove Installer Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function OrgComponent_mat_card_22_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrgComponent_mat_card_22_div_13_button_1_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OrgComponent_mat_card_22_div_13_button_2_Template, 2, 0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const site_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !site_r10.installer);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", site_r10.installer);
} }
function OrgComponent_mat_card_22_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgComponent_mat_card_22_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const site_r10 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.setSite(site_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgComponent_mat_card_22_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const site_r10 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.setSite(site_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-content", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "google-map", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "map-marker", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "map-info-window");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, OrgComponent_mat_card_22_div_13_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const site_r10 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", site_r10.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](site_r10.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("center", site_r10.latlng)("zoom", ctx_r6.map.zoom)("options", ctx_r6.map.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("position", site_r10.latlng);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.adminMode);
} }
class OrgComponent {
    constructor(_http, _appService, _dialog, _router) {
        this._http = _http;
        this._appService = _appService;
        this._dialog = _dialog;
        this._router = _router;
        this.headers = {};
        this.cookies = {};
        this.host = '';
        this.self = {};
        this.search = "";
        this.orgs = [];
        this.sites = [];
        this.role = "";
        this.orgMode = false;
        this.selected_org_obj = {
            id: "",
            name: "",
            role: ""
        };
        this.org_id = "";
        this.site_name = "";
        this.me = "";
        this.adminMode = false;
        this.adminAccess = false;
        this.map = {
            options: {
                scrollwheel: false,
                disableDefaultUI: true,
                draggable: false,
                draggableCursor: "pointer",
                clickableIcons: false
            },
            zoom: 12
        };
        this.claimDisabled = true;
        this.topBarLoading = false;
        this.noSiteToDisplay = false;
    }
    ngOnInit() {
        this._appService.headers.subscribe(headers => this.headers = headers);
        this._appService.cookies.subscribe(cookies => this.cookies = cookies);
        this._appService.host.subscribe(host => this.host = host);
        this._appService.self.subscribe(self => this.self = self || {});
        this._appService.org_id.subscribe(org_id => this.org_id = org_id);
        this.me = this.self["email"] || null;
        var tmp_orgs = [];
        if (!this.me) {
            this._router.navigate(["/login"]);
        }
        else {
            // parsing all the orgs/sites from the privileges
            // only orgs with admin/write/installer roles are used
            if (this.self != {} && this.self["privileges"]) {
                this.self["privileges"].forEach(element => {
                    if (element["role"] == "admin" || element["role"] == "write" || element["role"] == "installer") {
                        if (element["scope"] == "org") {
                            if (tmp_orgs.indexOf(element["org_id"]) < 0) {
                                this.orgs.push({ id: element["org_id"], name: element["name"], role: element["role"] });
                                tmp_orgs.push(element["org_id"]);
                            }
                        }
                        else if (element["scope"] == "site") {
                            if (tmp_orgs.indexOf(element["org_id"]) < 0) {
                                this.orgs.push({ id: element["org_id"], name: element["org_name"], role: element["role"] });
                                tmp_orgs.push(element["org_id"]);
                            }
                        }
                    }
                });
                this.orgs = this.sortList(this.orgs, "name");
            }
            // if only one, using it by default
            if (!this.org_id && this.orgs.length == 1) {
                this.org_id = this.orgs[1]["id"];
            }
            // if back button used, retrieving previously selected org
            // or if only one org, loading it automatically
            if (this.org_id) {
                this.orgs.forEach(element => {
                    if (element.id == this.org_id) {
                        this.selected_org_obj = element;
                        this.changeOrg();
                    }
                });
            }
        }
    }
    // when the user selects a new org
    // disabling the admin mode
    // and loading the sites
    changeOrg() {
        this.adminMode = false;
        if (this.selected_org_obj.role == "admin") {
            this.adminAccess = true;
        }
        else {
            this.adminAccess = false;
        }
        this.loadSites();
    }
    // loads the org sites
    loadSites() {
        this.org_id = this.selected_org_obj.id;
        if (this.adminMode == true) {
            this.role = this.selected_org_obj.role;
        }
        else {
            this.role = "installer";
        }
        this.topBarLoading = true;
        this.claimDisabled = true;
        this.sites = [];
        this._http.post('/api/sites/', { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, role: this.role }).subscribe({
            next: data => this.parseSites(data),
            error: error => {
                var message = "There was an error... ";
                if ("error" in error) {
                    message += error["error"]["message"];
                }
                this.topBarLoading = false;
                this.openError(message);
            }
        });
    }
    // parse the org sites from HTTP response
    parseSites(data) {
        if (data.sites.length > 0) {
            this.noSiteToDisplay = false;
            this.sites = this.sortList(data.sites, "name");
            this.claimDisabled = false;
        }
        else {
            this.noSiteToDisplay = true;
        }
        this.topBarLoading = false;
    }
    // when changing the mode from/to admin
    // reload the sites with the new mode
    changeRole(event) {
        this.adminMode = event.checked;
        this.loadSites();
    }
    // enable/disable the installer access for a specific site
    changeInstaller(site, enabled) {
        this.topBarLoading = true;
        this._http.post('/api/sites/installer/', { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, site_id: site.id, enabled: enabled }).subscribe({
            next: data => {
                this.topBarLoading = false;
                site.installer = enabled;
            },
            error: error => {
                var message = "There was an error... ";
                if ("error" in error) {
                    message += error["error"]["message"];
                }
                this.topBarLoading = false;
                this.openError(message);
            }
        });
    }
    // ROUTING FUNCTION
    // used when user wants to claim devices to org
    setOrg() {
        this.orgMode = true;
        this.gotoDash();
    }
    // used when user wants to claim devices to site
    setSite(site) {
        if (site != null) {
            this.site_name = site.name;
        }
        else {
            this.site_name = "";
        }
        this.orgMode = true;
        this._appService.siteNameSet(this.site_name);
        this.gotoDash();
    }
    // publish variables and go to the dashboard
    gotoDash() {
        this._appService.sitesSet(this.sites);
        this._appService.orgModeSet(this.orgMode);
        this._appService.roleSet(this.role);
        this._appService.orgIdSet(this.org_id);
        this._router.navigate(["/dashboard"]);
    }
    // COMMON
    sortList(data, attribute) {
        return data.sort(function (a, b) {
            var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase
            var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
    // DIALOG BOXES
    // ERROR
    openError(message) {
        const dialogRef = this._dialog.open(_common_common_error__WEBPACK_IMPORTED_MODULE_0__["ErrorDialog"], {
            data: message
        });
    }
}
OrgComponent.ɵfac = function OrgComponent_Factory(t) { return new (t || OrgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_3__["ConnectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
OrgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrgComponent, selectors: [["app-org"]], decls: 23, vars: 10, consts: [[1, "card-outer"], ["fxLayout", "column", 1, "top-bar-container"], ["fxLayout", "row wrap", 1, "top-bar", "mat-elevation-z8"], ["appearance", "outline", 1, "list"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 1, "create", 2, "margin", "auto 20px auto auto", 3, "disabled", "click"], [1, "material-icons", 2, "margin", "auto 10px auto auto"], ["style", "width: 100%; height: 4px; background-color: rgb(111 157 43);", 4, "ngIf"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["fxLayoutAlign", "center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "center stretch", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "start stretch"], ["class", "mat-elevation-z2", "fxLayout", "column", "fxLayoutAlign", "space-between stretch", "style", "cursor: pointer;margin: 10px; padding: 0px; width: 300px;", 4, "ngFor", "ngForOf"], [3, "value"], [2, "margin-right", "1em", "background-color", "lightgray", "border-radius", "14px", "padding", "5px", "font-size", "smaller"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [2, "vertical-align", "top", "display", "inline-block", "line-height", "24px", "margin-right", "8px"], [3, "checked", "change"], [2, "width", "100%", "height", "4px", "background-color", "rgb(111 157 43)"], ["mode", "indeterminate", "color", "accent"], ["fxLayoutAlign", "center"], [2, "color", "#777"], ["fxLayout", "column", "fxLayoutAlign", "center stretch"], ["fxLayoutAlign", "center stretch", 2, "color", "#777", "margin", "2em auto"], ["fxLayoutAlign", "center stretch", 2, "color", "#777", "font-size", "small", "margin-bottom", "2em"], ["fxLayout", "column", "fxLayoutAlign", "space-between stretch", 1, "mat-elevation-z2", 2, "cursor", "pointer", "margin", "10px", "padding", "0px", "width", "300px"], [3, "click"], [2, "margin", "10px"], [2, "width", "100%"], [2, "margin", "0px"], ["height", "300px", "width", "300px", 3, "center", "zoom", "options"], [3, "position"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["style", "background-color: red;", "mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "accent", 2, "background-color", "red", 3, "click"]], template: function OrgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function OrgComponent_Template_mat_select_valueChange_6_listener($event) { return ctx.selected_org_obj = $event; })("selectionChange", function OrgComponent_Template_mat_select_selectionChange_6_listener() { return ctx.changeOrg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OrgComponent_mat_option_9_Template, 5, 3, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OrgComponent_div_10_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrgComponent_Template_button_click_11_listener() { return ctx.setOrg(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Claim Device to Org");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, OrgComponent_div_16_Template, 1, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, OrgComponent_mat_progress_bar_17_Template, 1, 0, "mat-progress-bar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, OrgComponent_mat_card_19_Template, 3, 0, "mat-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, OrgComponent_mat_card_20_Template, 5, 0, "mat-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, OrgComponent_mat_card_22_Template, 14, 7, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selected_org_obj);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.selected_org_obj.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orgs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.adminAccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.claimDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.topBarLoading == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.topBarLoading == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.org_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noSiteToDisplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sites);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["GoogleMap"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["MapMarker"], _angular_google_maps__WEBPACK_IMPORTED_MODULE_16__["MapInfoWindow"]], styles: [".card-outer[_ngcontent-%COMP%] {\n    background-color: unset;\n    max-width: 1900px;\n    margin: auto;\n}\n\n.top-bar-container[_ngcontent-%COMP%] {\n    margin: 1em 0;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n    background-color: white;\n    border-radius: 5px 5px 0 0;\n}\n\n.list[_ngcontent-%COMP%] {\n    margin: 1.34375em 1em 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n    z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.button-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 300px;\n    justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJvcmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLW91dGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBtYXgtd2lkdGg6IDE5MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi50b3AtYmFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn1cblxuLnRvcC1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xufVxuXG4ubGlzdCB7XG4gICAgbWFyZ2luOiAxLjM0Mzc1ZW0gMWVtIDA7XG59XG5cbi5sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5YztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmxvYWRpbmcgZGl2IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"] });


/***/ }),

/***/ "Popb":
/*!****************************************!*\
  !*** ./src/app/common/common-error.ts ***!
  \****************************************/
/*! exports provided: ErrorDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialog", function() { return ErrorDialog; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ErrorDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ok() {
        this.dialogRef.close();
    }
}
ErrorDialog.ɵfac = function ErrorDialog_Factory(t) { return new (t || ErrorDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ErrorDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ErrorDialog, selectors: [["common-error"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function ErrorDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Oops...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ErrorDialog_Template_button_click_6_listener() { return ctx.ok(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data, "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], encapsulation: 2 });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _common_common_claim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common-claim */ "6bIR");
/* harmony import */ var _common_common_unclaim__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common-unclaim */ "pxKM");
/* harmony import */ var _common_common_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/common-error */ "Popb");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../connector.service */ "l5d9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");






























function DashboardComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const map_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", map_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", map_r9.name, " ");
} }
function DashboardComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 31);
} }
function DashboardComponent_mat_progress_bar_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mat-progress-bar", 32);
} }
function DashboardComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Device Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function DashboardComponent_th_30_Template_mat_select_valueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r11.device_type = $event; })("selectionChange", function DashboardComponent_th_30_Template_mat_select_selectionChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r13.getDevices(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "All Devices");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Access Points");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Switches");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Gateway");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 40, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keyup", function DashboardComponent_th_30_Template_input_keyup_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r3.device_type);
} }
const _c0 = function (a0) { return { "color": a0 }; };
function DashboardComponent_td_31_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "wifi");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, element_r15.connected ? "green" : "lightgray"));
} }
function DashboardComponent_td_31_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "settings_ethernet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, element_r15.connected ? "green" : "lightgray"));
} }
function DashboardComponent_td_31_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "cloud_queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](1, _c0, element_r15.connected ? "green" : "lightgray"));
} }
function DashboardComponent_td_31_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", element_r15.name, " ");
} }
function DashboardComponent_td_31_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", element_r15.mac, " ");
} }
const _c1 = function (a0) { return { selected: a0 }; };
function DashboardComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_td_31_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r27); const element_r15 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r26.editDevice(element_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DashboardComponent_td_31_mat_icon_3_Template, 2, 3, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DashboardComponent_td_31_mat_icon_4_Template, 2, 3, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, DashboardComponent_td_31_mat_icon_5_Template, 2, 3, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DashboardComponent_td_31_div_7_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DashboardComponent_td_31_div_8_Template, 2, 1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c1, ctx_r4.editingDevice && element_r15.mac === ctx_r4.editingDevice.mac));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r15.type === "ap");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r15.type === "switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r15.type === "gateway");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", element_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !element_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](element_r15.mac);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Model: ", element_r15.model, "");
} }
function DashboardComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 50);
} }
function DashboardComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 51);
} }
function DashboardComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select a device... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_37_mat_slide_toggle_4_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-slide-toggle", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function DashboardComponent_div_37_mat_slide_toggle_4_Template_mat_slide_toggle_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r40.locate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Locate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", ctx_r29.locatingDevices.indexOf(ctx_r29.editingDevice.mac) >= 0)("disabled", !ctx_r29.editingDevice.connected || !ctx_r29.editingDevice.site_name);
} }
function DashboardComponent_div_37_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "cloud_queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Device is CONNECTED to the Cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_37_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "cloud_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Device is NOT CONNECTED to the Cloud");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_37_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_37_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_37_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r42.openDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_37_mat_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const site_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", site_r44.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", site_r44.name, " ");
} }
function DashboardComponent_div_37_mat_option_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const map_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", map_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", map_r45.name, " ");
} }
function DashboardComponent_div_37_mat_form_field_48_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "HEIGHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function DashboardComponent_div_37_mat_form_field_48_Template_input_keydown_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r46.saveDevice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_37_mat_form_field_49_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "ORIENTATION");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function DashboardComponent_div_37_mat_form_field_49_Template_input_keydown_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r48.saveDevice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_37_mat_form_field_50_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "X POSITION");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function DashboardComponent_div_37_mat_form_field_50_Template_input_keydown_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r50.saveDevice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_37_mat_form_field_51_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Y POSITION");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function DashboardComponent_div_37_mat_form_field_51_Template_input_keydown_enter_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r52.saveDevice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, DashboardComponent_div_37_mat_slide_toggle_4_Template, 2, 2, "mat-slide-toggle", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, DashboardComponent_div_37_div_6_Template, 5, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DashboardComponent_div_37_div_7_Template, 5, 0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DashboardComponent_div_37_button_8_Template, 2, 0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, DashboardComponent_div_37_button_9_Template, 2, 0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "mat-divider", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "TYPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "MODEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "SERIAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "MAC ADDRESS");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "mat-divider", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "form", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "SITE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "mat-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function DashboardComponent_div_37_Template_mat_select_selectionChange_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r54.changeSite(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](34, DashboardComponent_div_37_mat_option_34_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "FLOORPLAN (only floorplan with image can be used)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "mat-select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "mat-option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "No FloorPlan");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, DashboardComponent_div_37_mat_option_41_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "mat-divider", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-form-field", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "NAME");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function DashboardComponent_div_37_Template_input_keydown_enter_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r56.saveDevice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, DashboardComponent_div_37_mat_form_field_48_Template, 4, 0, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, DashboardComponent_div_37_mat_form_field_49_Template, 4, 0, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, DashboardComponent_div_37_mat_form_field_50_Template, 4, 0, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, DashboardComponent_div_37_mat_form_field_51_Template, 4, 0, "mat-form-field", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_37_Template_button_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r57.discardDevice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_div_37_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r55); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r58.saveDevice(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.editingDevice.type == "ap");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.editingDevice.connected);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r8.editingDevice.connected);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r8.editingDevice.site_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.editingDevice.site_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r8.editingDevice.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r8.editingDevice.model);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r8.editingDevice.serial);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r8.editingDevice.mac);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r8.frmDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r8.sites);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r8.maps);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.editingDevice.type == "ap");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.editingDevice.type == "ap");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.editingDevice.type == "ap");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.editingDevice.type == "ap");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r8.frmDevice.invalid);
} }
const _c2 = function () { return [10, 25, 50, 100]; };
class DashboardComponent {
    constructor(_router, _http, _appService, _dialog, _formBuilder, _snackBar) {
        this._router = _router;
        this._http = _http;
        this._appService = _appService;
        this._dialog = _dialog;
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.frmDevice = this._formBuilder.group({
            name: [""],
            site_name: [""],
            map_id: [""],
            height: ["2.75", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)],
            orientation: ["0", [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(360)]],
            x: ["0"],
            y: ["0"]
        });
        this.headers = {};
        this.cookies = {};
        this.host = '';
        this.self = {};
        this.search = "";
        this.orgs = [];
        this.sites = [];
        this.maps = [];
        this.org_id = "";
        this.role = "";
        this.orgMode = false;
        this.site_name = "__any__";
        this.map_id = "__any__";
        this.device_type = "all";
        this.me = "";
        this.claimButton = "To Site";
        this.topBarLoading = false;
        this.editingDevice = null;
        this.locatingDevices = [];
        this.devices = [];
        this.resultsLength = 0;
        this.displayedColumns = ["device"]; //['mac', 'name', 'type', 'model', 'serial', 'connected', 'site_name', 'action']
    }
    //////////////////////////////////////////////////////////////////////////////
    /////           INIT
    //////////////////////////////////////////////////////////////////////////////
    ngOnInit() {
        const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["interval"])(60000);
        this._appService.headers.subscribe(headers => this.headers = headers);
        this._appService.cookies.subscribe(cookies => this.cookies = cookies);
        this._appService.host.subscribe(host => this.host = host);
        this._appService.self.subscribe(self => this.self = self || {});
        this._appService.org_id.subscribe(org_id => this.org_id = org_id);
        this._appService.site_name.subscribe(site_name => this.site_name = site_name);
        this._appService.sites.subscribe(sites => this.sites = sites);
        this._appService.role.subscribe(role => this.role = role);
        this._appService.orgMode.subscribe(orgMode => this.orgMode = orgMode);
        this.me = this.self["email"] || null;
        if (!this.me) {
            this._router.navigate(["/login"]);
        }
        else {
            if (this.sites.length == 0) {
                this.loadSites();
            }
            this.getDevices();
            if (this.site_name) {
                this.getMaps(this.site_name);
            }
            this.onChanges();
            this._subscription = source.subscribe(s => this.getDevices());
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    //////////////////////////////////////////////////////////////////////////////
    /////           SITE MGMT
    //////////////////////////////////////////////////////////////////////////////
    // when a device is assigned to a site
    changeSite() {
        this.frmDevice.controls["map_id"].setValue("");
        if (this.frmDevice.value.site_name) {
            this.getMaps(this.frmDevice.value.site_name);
        }
    }
    // loads the org sites
    loadSites() {
        this.org_id = this.org_id;
        this.topBarLoading = true;
        this.sites = [];
        this._http.post('/api/sites/', { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, role: this.role }).subscribe({
            next: data => this.parseSites(data),
            error: error => {
                var message = "There was an error... ";
                if ("error" in error) {
                    message += error["error"]["message"];
                }
                this.topBarLoading = false;
                this.openError(message);
            }
        });
    }
    // parse the org sites from HTTP response
    parseSites(data) {
        if (data.sites.length > 0) {
            this.sites = this.sortList(data.sites, "name");
        }
        this.topBarLoading = false;
    }
    //////////////////////////////////////////////////////////////////////////////
    /////           LOAD MAP LIST
    //////////////////////////////////////////////////////////////////////////////
    getMaps(site_name) {
        this.topBarLoading = true;
        this._http.post('/api/maps/', { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, site_name: site_name, role: this.role }).subscribe({
            next: data => this.parseMap(data),
            error: error => {
                var message = "There was an error... ";
                if ("error" in error) {
                    message += error["error"]["message"];
                }
                this.topBarLoading = false;
                this.openError(message);
            }
        });
    }
    parseMap(data) {
        if (data.maps.length > 0) {
            var tmp_list = [];
            data.maps.forEach(element => {
                if (element.url) {
                    tmp_list.push(element);
                }
            });
            this.maps = this.sortList(tmp_list, "name");
        }
        this.topBarLoading = false;
        this.map_id = "__any__";
    }
    changeMap() {
        if (this.map_id == "__any__") {
            this.claimButton = "To Site";
        }
        else {
            this.claimButton = "To Map";
        }
        this.getDevices();
    }
    //////////////////////////////////////////////////////////////////////////////
    /////           LOAD DEVICE LIST
    //////////////////////////////////////////////////////////////////////////////
    getDevices() {
        var body = null;
        if (this.site_name == "__any__" || this.site_name == "") {
            body = { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, full: true, type: this.device_type, role: this.role };
        }
        else if (this.site_name) {
            body = { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, site_name: this.site_name, full: true, type: this.device_type, role: this.role };
        }
        if (body) {
            this.topBarLoading = true;
            this._http.post('/api/devices/', body).subscribe({
                next: data => {
                    var tmp = [];
                    data["results"].forEach(element => {
                        if (!this.site_name || (element.site_name == this.site_name && (this.map_id == "__any__" || element.map_id == this.map_id))) {
                            tmp.push(element);
                            if (this.editingDevice && this.editingDevice.mac == element.mac) {
                                this.editingDevice = element;
                            }
                        }
                    });
                    this.filteredDevicesDatase = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](tmp);
                    this.filteredDevicesDatase.paginator = this.paginator;
                    this.topBarLoading = false;
                },
                error: error => {
                    var message = "There was an error... ";
                    if ("error" in error) {
                        message += error["error"]["message"];
                    }
                    this.openError(message);
                }
            });
        }
    }
    //////////////////////////////////////////////////////////////////////////////
    /////           EDIT DEVICE
    //////////////////////////////////////////////////////////////////////////////
    onChanges() {
        this.frmDevice.get('site_name').valueChanges
            .subscribe(site_name => {
            this.checkSiteName(site_name);
        });
    }
    checkSiteName(site_name) {
        if (!site_name) {
            this.frmDevice.controls["height"].disable();
            this.frmDevice.controls["map_id"].disable();
            this.frmDevice.controls["name"].disable();
            this.frmDevice.controls["orientation"].disable();
            this.frmDevice.controls["x"].disable();
            this.frmDevice.controls["y"].disable();
        }
        else {
            this.frmDevice.controls["height"].enable();
            this.frmDevice.controls["map_id"].enable();
            this.frmDevice.controls["name"].enable();
            this.frmDevice.controls["orientation"].enable();
            this.frmDevice.controls["x"].enable();
            this.frmDevice.controls["y"].enable();
        }
    }
    editDevice(device) {
        if (device == this.editingDevice) {
            this.discardDevice();
        }
        else {
            this.editingDevice = device;
            this.updateFrmDeviceValues(this.editingDevice);
            this.checkSiteName(this.frmDevice.value.site_name);
            if (this.editingDevice.site_name) {
                this.getMaps(this.editingDevice.site_name);
            }
        }
    }
    saveDevice() {
        if (this.frmDevice.valid && !this.topBarLoading) {
            this.topBarLoading = true;
            var body = {
                host: this.host,
                cookies: this.cookies,
                headers: this.headers,
                role: this.role,
                org_id: this.org_id,
                device: this.frmDevice.getRawValue(),
                device_mac: this.editingDevice.mac
            };
            this._http.post('/api/devices/provision/', body).subscribe({
                next: data => {
                    this.topBarLoading = false;
                    this.updateFrmDeviceValues(data.result);
                    this.getDevices();
                    this.openSnackBar("Device " + this.editingDevice.mac + " successfully provisioned", "Done");
                },
                error: error => {
                    this.topBarLoading = false;
                    var message = "Unable to save changes to Device " + this.editingDevice.mac + "... ";
                    if ("error" in error) {
                        message += error["error"]["message"];
                    }
                    this.openError(message);
                }
            });
        }
    }
    discardDevice() {
        this.frmDevice = this._formBuilder.group({
            height: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(0)],
            map_id: [""],
            name: [""],
            orientation: [""],
            site_name: [""],
            x: [""],
            y: [""]
        });
        this.editingDevice = null;
    }
    //////////////////////////////////////////////////////////////////////////////
    /////           LOCATE DEVICE
    //////////////////////////////////////////////////////////////////////////////
    locate() {
        const device_mac = this.editingDevice.mac;
        const index = this.locatingDevices.indexOf(device_mac);
        if (index >= 0) {
            this._http.post('/api/devices/unlocate/', { host: this.host, cookies: this.cookies, headers: this.headers, role: this.role, org_id: this.org_id, device_mac: device_mac }).subscribe({
                next: data => {
                    this.openSnackBar("Location  of the Device " + this.editingDevice.mac + " stopped", "Done");
                    this.locatingDevices.splice(index, 1);
                },
                error: error => {
                    var message = "There was an error... ";
                    if ("error" in error) {
                        message += error["error"]["message"];
                    }
                    this.openError(message);
                }
            });
        }
        else {
            this._http.post('/api/devices/locate/', { host: this.host, cookies: this.cookies, headers: this.headers, role: this.role, org_id: this.org_id, device_mac: device_mac }).subscribe({
                next: data => {
                    this.openSnackBar("Location  of the Device " + this.editingDevice.mac + " started", "Done");
                    this.locatingDevices.push(device_mac);
                },
                error: error => {
                    var message = "There was an error... ";
                    if ("error" in error) {
                        message += error["error"]["message"];
                    }
                    this.openError(message);
                }
            });
        }
    }
    //////////////////////////////////////////////////////////////////////////////
    /////           COMMON
    //////////////////////////////////////////////////////////////////////////////
    updateFrmDeviceValues(device) {
        this.frmDevice.controls["map_id"].setValue(device.map_id);
        this.frmDevice.controls["name"].setValue(device.name);
        this.frmDevice.controls["site_name"].setValue(device.site_name);
        this.frmDevice.controls["height"].setValue(device.height);
        this.frmDevice.controls["orientation"].setValue(device.orientation);
        this.frmDevice.controls["x"].setValue(device.x);
        this.frmDevice.controls["y"].setValue(device.y);
    }
    sortList(data, attribute) {
        return data.sort(function (a, b) {
            var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase
            var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value.trim().toLowerCase();
        this.filteredDevicesDatase.filter = filterValue.trim().toLowerCase();
        if (this.filteredDevicesDatase.paginator) {
            this.filteredDevicesDatase.paginator.firstPage();
        }
    }
    back() {
        this._router.navigate(["/select"]);
    }
    //////////////////////////////////////////////////////////////////////////////
    /////           DIALOG BOXES
    //////////////////////////////////////////////////////////////////////////////
    // ERROR
    openError(message) {
        const dialogRef = this._dialog.open(_common_common_error__WEBPACK_IMPORTED_MODULE_4__["ErrorDialog"], {
            data: message
        });
    }
    // CREATE DIALOG
    openClaim() {
        var body = {
            host: this.host,
            cookies: this.cookies,
            headers: this.headers,
            org_id: this.org_id,
            site_name: this.site_name,
            map_id: this.map_id,
            claim_codes: null
        };
        const dialogRef = this._dialog.open(_common_common_claim__WEBPACK_IMPORTED_MODULE_2__["ClaimDialog"], {
            data: { body: body }
        });
        dialogRef.afterClosed().subscribe(result => {
            this.getDevices();
        });
    }
    // DELETE DIALOG
    openDelete() {
        var device = this.editingDevice;
        const dialogRef = this._dialog.open(_common_common_unclaim__WEBPACK_IMPORTED_MODULE_3__["UnclaimDialog"], {
            data: device
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                var body = {
                    host: this.host,
                    cookies: this.cookies,
                    headers: this.headers,
                    role: this.role,
                    org_id: this.org_id,
                    site_name: this.site_name,
                    map_id: this.map_id,
                    device_mac: device.mac
                };
                this._http.post('/api/devices/unclaim/', body).subscribe({
                    next: data => {
                        this.editingDevice = null;
                        this.getDevices();
                        this.openSnackBar("Device " + device.mac + " successfully deleted", "Done");
                    },
                    error: error => {
                        var message = "Unable to delete the device " + device.mac + "... ";
                        if ("error" in error) {
                            message += error["error"]["message"];
                        }
                        this.openError(message);
                    }
                });
            }
        });
    }
    // SNACK BAR
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
            horizontalPosition: "center",
            verticalPosition: "top",
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_10__["ConnectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBar"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 41, vars: 14, consts: [["fxLayout", "column", 1, "card-outer", 2, "padding-bottom", "0", "padding-top", "0", "height", "calc(100vh - 64px)", "justify-content", "space-between"], ["fxLayout", "column", 2, "flex-grow", "1", "justify-content", "flex-start"], ["fxLayout", "column", 1, "top-bar-container"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "top-bar", "mat-elevation-z8"], ["appearance", "outline", 1, "list"], [3, "disabled", "value", "valueChange", "selectionChange"], ["value", "__any__"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 1, "create", 2, "margin", "auto", 3, "click"], [1, "material-icons", 2, "margin", "auto 10px auto auto"], ["mat-button", "", 2, "height", "100%", "margin", "auto", 3, "disabled", "click"], ["matTooltip", "Refresh list", "aria-label", "Refresh list"], ["style", "width: 100%; height: 4px; background-color: rgb(111 157 43);", 4, "ngIf"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["fxLayout", "column", 2, "background-color", "white", "height", "100%"], ["fxLayout", "row", "fxLayoutAlign", "stretch", 2, "flex-grow", "1"], ["fxLayout", "column", "fxFlex", "30%", 1, "mat-elevation-z8"], ["fxLayout", "column", 1, "psk-table-container"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "device"], ["mat-header-cell", "", "fxLayout", "column", "fxLayoutAlign", "space-between stretch", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["fxLayout", "column", "fxLayoutAlign", "center stretch", "fxFlex", "", 1, "mat-elevation-z2"], ["style", "text-align: center;font-size: large;color: gray;", 4, "ngIf"], ["fxFlex", "", "fxLayout", "column", "style", "margin:3em", 4, "ngIf"], ["fxLayou", "row", "fxLayoutAlign", "start center", 2, "margin-top", "1em", "margin-bottom", "1em"], ["mat-raised-button", "", "color", "accent", 3, "click"], [3, "value"], [2, "width", "100%", "height", "4px", "background-color", "rgb(111 157 43)"], ["mode", "indeterminate", "color", "accent"], ["mat-header-cell", "", "fxLayout", "column", "fxLayoutAlign", "space-between stretch"], ["appearance", "outline", 1, "compact-select"], [3, "value", "valueChange", "selectionChange"], ["value", "all"], ["value", "ap"], ["value", "switch"], ["value", "gateway"], ["matInput", "", "placeholder", "Ex. device name", 3, "keyup"], ["input", ""], ["mat-cell", "", 3, "ngClass"], ["role", "button", "fxLayout", "row", "fxLayoutAlign", "space-between stretch", 1, "device", 2, "cursor", "pointer", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["aria-hidden", "false", 3, "ngStyle", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "scenter center", 2, "margin-left", "2em"], [4, "ngIf"], ["fxLayout", "column", "fxFlex", "", "fxLayoutAlign", "space-between end", 2, "color", "gray"], ["aria-hidden", "false", 3, "ngStyle"], ["mat-header-row", ""], ["mat-row", ""], [2, "text-align", "center", "font-size", "large", "color", "gray"], ["fxFlex", "", "fxLayout", "column", 2, "margin", "3em"], ["mat-dialog-content", "", "fxLayout", "column"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between stretch"], ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "margin-bottom", "2em"], [3, "checked", "disabled", "change", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 4, "ngIf"], ["mat-button", "", "style", "color: darkgray; margin-bottom: 2em;", 4, "ngIf"], ["mat-button", "", "style", "color: red; margin-bottom: 2em;", 3, "click", 4, "ngIf"], ["inset", "true", 2, "margin-bottom", "1em"], ["appearance", "outline"], ["matInput", "", "disabled", "", 3, "ngModel"], ["fxLayout", "column", 1, "create-form", 3, "formGroup"], ["formControlName", "site_name", 3, "selectionChange"], ["formControlName", "map_id"], ["value", ""], ["matInput", "", "formControlName", "name", "cdkFocusInitial", "", 3, "keydown.enter"], ["appearance", "outline", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], [3, "checked", "disabled", "change"], ["aria-hidden", "false", 2, "color", "green", "margin-right", "1em"], ["aria-hidden", "false", 2, "color", "gray", "margin-right", "1em"], ["mat-button", "", 2, "color", "darkgray", "margin-bottom", "2em"], ["mat-button", "", 2, "color", "red", "margin-bottom", "2em", 3, "click"], ["matInput", "", "formControlName", "height", "type", "number", "min", "0", 3, "keydown.enter"], ["matInput", "", "type", "number", "formControlName", "orientation", "min", "0", "max", "360", 3, "keydown.enter"], ["matInput", "", "formControlName", "x", "type", "number", 3, "keydown.enter"], ["matInput", "", "formControlName", "y", "type", "number", 3, "keydown.enter"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Floorplan");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function DashboardComponent_Template_mat_select_valueChange_7_listener($event) { return ctx.map_id = $event; })("selectionChange", function DashboardComponent_Template_mat_select_selectionChange_7_listener() { return ctx.changeMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "All Floorplans");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, DashboardComponent_mat_option_10_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_12_listener() { return ctx.openClaim(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_17_listener() { return ctx.getDevices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Refresh List");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, DashboardComponent_div_22_Template, 1, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, DashboardComponent_mat_progress_bar_23_Template, 1, 0, "mat-progress-bar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, DashboardComponent_th_30_Template, 18, 1, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](31, DashboardComponent_td_31_Template, 14, 10, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](32, DashboardComponent_tr_32_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, DashboardComponent_tr_33_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "mat-paginator", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, DashboardComponent_div_36_Template, 2, 0, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, DashboardComponent_div_37_Template, 57, 17, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_39_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !ctx.site_name)("value", ctx.map_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.maps);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Claim Devices ", ctx.claimButton, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.topBarLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.topBarLoading == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.topBarLoading == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.filteredDevicesDatase);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.editingDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.editingDevice);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_24__["DefaultStyleDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogContent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogActions"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"]], styles: [".card-outer[_ngcontent-%COMP%] {\n    background-color: unset;\n    max-width: 1900px;\n    margin: auto;\n}\n\n.top-bar-container[_ngcontent-%COMP%] {\n    margin: 1em 0;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n    background-color: white;\n    border-radius: 5px 5px 0 0;\n}\n\n.list[_ngcontent-%COMP%] {\n    margin: 1.34375em 1em 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n    z-index: 1000;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.button-container[_ngcontent-%COMP%] {\n    display: flex;\n    width: 300px;\n    justify-content: space-between;\n}\n\n.end[_ngcontent-%COMP%] {\n    justify-content: space-around !important;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n    color: gray;\n}\n\n.tooltip[_ngcontent-%COMP%]:hover {\n    color: black;\n}\n\n\n\ntr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n    height: 2em;\n}\n\n.psk-table-container[_ngcontent-%COMP%] {\n    \n    \n    overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n    width: 100%;\n}\n\n.psk-container[_ngcontent-%COMP%] {\n    border: none;\n    width: 100%;\n    min-width: 20em;\n    position: relative;\n    margin: auto;\n    border-radius: 0.3em;\n    max-width: 150em;\n}\n\n.psk-table-loading-shade[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 56px;\n    right: 0;\n    background: rgba(0, 0, 0, 0.15);\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n\n.mat-column-action[_ngcontent-%COMP%] {\n    width: 150px !important;\n}\n\n.edit[_ngcontent-%COMP%] {\n    background-color: #0d60aa !important;\n}\n\n.delete[_ngcontent-%COMP%] {\n    background-color: #f44336 !important;\n}\n\ntd[_ngcontent-%COMP%]:hover {\n    background-color: lightgrey;\n    transition: background-color 250ms ease-in-out;\n}\n\ntd[_ngcontent-%COMP%] {\n    background-color: unset;\n    transition: background-color 250ms ease-in-out;\n}\n\ntd.selected[_ngcontent-%COMP%] {\n    background-color: lightgrey;\n    transition: background-color 250ms ease-in-out;\n}\n\n.compact-select[_ngcontent-%COMP%] {\n    margin: 1em 0 -1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBR0EsY0FBYzs7QUFFZDs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osUUFBUTtJQUNSLCtCQUErQjtJQUMvQixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBR0Esa0JBQWtCOztBQUVsQjtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLW91dGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICBtYXgtd2lkdGg6IDE5MDBweDtcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi50b3AtYmFyLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn1cblxuLnRvcC1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xufVxuXG4ubGlzdCB7XG4gICAgbWFyZ2luOiAxLjM0Mzc1ZW0gMWVtIDA7XG59XG5cbi5sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5YztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLmxvYWRpbmcgZGl2IHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZW5kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xufVxuXG4udG9vbHRpcCB7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi50b29sdGlwOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cblxuLyogU3RydWN0dXJlICovXG5cbnRyLm1hdC1yb3csXG50ci5tYXQtZm9vdGVyLXJvdyB7XG4gICAgaGVpZ2h0OiAyZW07XG59XG5cbi5wc2stdGFibGUtY29udGFpbmVyIHtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgLyogbWF4LWhlaWdodDogNDAwcHg7ICovXG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBzay1jb250YWluZXIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDIwZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICBtYXgtd2lkdGg6IDE1MGVtO1xufVxuXG4ucHNrLXRhYmxlLWxvYWRpbmctc2hhZGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDU2cHg7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuXG4vKiBDb2x1bW4gV2lkdGhzICovXG5cbi5tYXQtY29sdW1uLWFjdGlvbiB7XG4gICAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2MGFhICFpbXBvcnRhbnQ7XG59XG5cbi5kZWxldGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbn1cblxudGQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG50ZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyNTBtcyBlYXNlLWluLW91dDtcbn1cblxudGQuc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uY29tcGFjdC1zZWxlY3Qge1xuICAgIG1hcmdpbjogMWVtIDAgLTFlbTtcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Mist Installer';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "start center", 2, "background-color", "rgb(236 236 236)", "color", "gray"], ["height", "100%", "alt", "Mist Logo", "src", "data:image/png;base64,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"], [2, "margin-left", "1em", "font-weight", "200"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mist Installer UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */", "[_nghost-%COMP%] {\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n        font-size: 14px;\n        color: #333;\n        box-sizing: border-box;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n    }\n    \n    h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n        margin: 8px 0;\n    }\n    \n    p[_ngcontent-%COMP%] {\n        margin: 0;\n    }\n    \n    .spacer[_ngcontent-%COMP%] {\n        flex: 1;\n    }\n    \n    .toolbar[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 40px;\n        display: flex;\n        align-items: center;\n        background-color: #0e62ad;\n        \n        color: white;\n        font-weight: 600;\n    }\n    \n    .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        margin: 0 16px;\n    }\n    \n    .content[_ngcontent-%COMP%] {\n        display: flex;\n        margin: 82px auto 32px;\n        padding: 0 16px;\n        max-width: 960px;\n        flex-direction: column;\n        align-items: center;\n    }\n    \n    svg.material-icons[_ngcontent-%COMP%] {\n        height: 24px;\n        width: auto;\n    }\n    \n    svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n        margin-right: 8px;\n    }\n    \n    .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n        fill: #888;\n    }\n    \n    .card-container[_ngcontent-%COMP%] {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n        margin-top: 16px;\n    }\n    \n    .card[_ngcontent-%COMP%] {\n        border-radius: 4px;\n        border: 1px solid #eee;\n        background-color: #fafafa;\n        height: 40px;\n        width: 200px;\n        margin: 0 8px 16px;\n        padding: 16px;\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        transition: all 0.2s ease-in-out;\n        line-height: 24px;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n        margin-right: 0;\n    }\n    \n    .card.card-small[_ngcontent-%COMP%] {\n        height: 16px;\n        width: 168px;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n        cursor: pointer;\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n        transform: translateY(-3px);\n        box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n    }\n    \n    .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n        fill: rgb(105, 103, 103);\n    }\n    \n    .card.highlight-card[_ngcontent-%COMP%] {\n        background-color: #1976d2;\n        color: white;\n        font-weight: 600;\n        border: none;\n        width: auto;\n        min-width: 30%;\n        position: relative;\n    }\n    \n    .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        margin-left: 60px;\n    }\n    \n    svg#rocket[_ngcontent-%COMP%] {\n        width: 80px;\n        position: absolute;\n        left: -10px;\n        top: -24px;\n    }\n    \n    svg#rocket-smoke[_ngcontent-%COMP%] {\n        height: calc(100vh - 95px);\n        position: absolute;\n        top: 10px;\n        right: 180px;\n        z-index: -10;\n    }\n    \n    a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n        color: #1976d2;\n        text-decoration: none;\n    }\n    \n    a[_ngcontent-%COMP%]:hover {\n        color: #125699;\n    }\n    \n    .terminal[_ngcontent-%COMP%] {\n        position: relative;\n        width: 80%;\n        max-width: 600px;\n        border-radius: 6px;\n        padding-top: 45px;\n        margin-top: 8px;\n        overflow: hidden;\n        background-color: rgb(15, 15, 16);\n    }\n    \n    .terminal[_ngcontent-%COMP%]::before {\n        content: \"\\2022 \\2022 \\2022\";\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 4px;\n        background: rgb(58, 58, 58);\n        color: #c2c3c4;\n        width: 100%;\n        font-size: 2rem;\n        line-height: 0;\n        padding: 14px 0;\n        text-indent: 4px;\n    }\n    \n    .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n        font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n        color: white;\n        padding: 0 1rem 1rem;\n        margin: 0;\n    }\n    \n    .circle-link[_ngcontent-%COMP%] {\n        height: 40px;\n        width: 40px;\n        border-radius: 40px;\n        margin: 8px;\n        background-color: white;\n        border: 1px solid #eeeeee;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        cursor: pointer;\n        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n        transition: 1s ease-out;\n    }\n    \n    .circle-link[_ngcontent-%COMP%]:hover {\n        transform: translateY(-0.25rem);\n        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n    }\n    \n    footer[_ngcontent-%COMP%] {\n        margin-top: 8px;\n        display: flex;\n        align-items: center;\n        line-height: 20px;\n    }\n    \n    footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%] {\n        color: #24292e;\n        display: flex;\n        align-items: center;\n        font-size: 12px;\n        padding: 3px 10px;\n        border: 1px solid rgba(27, 31, 35, .2);\n        border-radius: 3px;\n        background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n        margin-left: 4px;\n        font-weight: 600;\n        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%]:hover {\n        background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n        border-color: rgba(27, 31, 35, .35);\n        background-position: -.5em;\n    }\n    \n    .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n        height: 16px;\n        width: 16px;\n        margin-right: 4px;\n    }\n    \n    svg#clouds[_ngcontent-%COMP%] {\n        position: fixed;\n        bottom: -160px;\n        left: -230px;\n        z-index: -10;\n        width: 1920px;\n    }\n    \n    \n    @media screen and (max-width: 767px) {\n        .card-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n            width: 100%;\n        }\n        .card[_ngcontent-%COMP%]:not(.highlight-card) {\n            height: 16px;\n            margin: 8px 0;\n        }\n        .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n            margin-left: 72px;\n        }\n        svg#rocket-smoke[_ngcontent-%COMP%] {\n            right: 120px;\n            transform: rotate(-5deg);\n        }\n    }\n    \n    @media screen and (max-width: 575px) {\n        svg#rocket-smoke[_ngcontent-%COMP%] {\n            display: none;\n            visibility: hidden;\n        }\n    }\n    \n    footer[_ngcontent-%COMP%] {\n        position: absolute;\n        bottom: 0px;\n        right: 0px\n    }"] });


/***/ }),

/***/ "XXkm":
/*!****************************************!*\
  !*** ./src/app/site/site.component.ts ***!
  \****************************************/
/*! exports provided: SiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteComponent", function() { return SiteComponent; });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _common_common_claim__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common-claim */ "6bIR");
/* harmony import */ var _common_common_unclaim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/common-unclaim */ "pxKM");
/* harmony import */ var _common_common_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/common-error */ "Popb");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../connector.service */ "l5d9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");


























function SiteComponent_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const map_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", map_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", map_r9.name, " ");
} }
function SiteComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 31);
} }
function SiteComponent_mat_progress_bar_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-progress-bar", 32);
} }
function SiteComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "input", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function SiteComponent_th_30_Template_input_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.applyFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SiteComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SiteComponent_td_31_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const element_r13 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.openEdit(element_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r13.mac);
} }
function SiteComponent_tr_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 39);
} }
function SiteComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 40);
} }
function SiteComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " No Floorplan to display ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SiteComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function () { return [10, 25, 50, 100]; };
const _c1 = function (a0) { return { hidden_map: a0 }; };
class SiteComponent {
    constructor(_http, _appService, _dialog, _snackBar) {
        this._http = _http;
        this._appService = _appService;
        this._dialog = _dialog;
        this._snackBar = _snackBar;
        this.hideFloorplan = true;
        this.headers = {};
        this.cookies = {};
        this.host = '';
        this.self = {};
        this.search = "";
        this.orgs = [];
        this.sites = [];
        this.maps = [];
        this.org_id = "";
        this.role = "";
        this.site_name = "__any__";
        this.map_id = "__any__";
        this.device_type = "";
        this.me = "";
        this.claimButton = "To Site";
        this.topBarLoading = false;
        this.loading = false;
        this.devices = [];
        this.resultsLength = 0;
        this.displayedColumns = ['device'];
    }
    ngOnInit() {
        this.hideFloorplan = false;
        this.initMap();
        this._appService.headers.subscribe(headers => this.headers = headers);
        this._appService.cookies.subscribe(cookies => this.cookies = cookies);
        this._appService.host.subscribe(host => this.host = host);
        this._appService.self.subscribe(self => this.self = self || {});
        this._appService.org_id.subscribe(org_id => this.org_id = org_id);
        this._appService.sites.subscribe(sites => this.sites = sites);
        this._appService.site_name.subscribe(site_name => this.site_name = site_name);
        this._appService.role.subscribe(role => this.role = role);
        this.getDevices();
        if (this.site_name) {
            this.getMaps();
        }
    }
    getDevices() {
        var body = null;
        if (this.site_name == "__any__" || this.site_name == "") {
            body = { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, full: true, type: this.device_type, role: this.role };
        }
        else if (this.site_name) {
            body = { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, site_name: this.site_name, full: true, type: this.device_type, role: this.role };
        }
        if (body) {
            this.loading = true;
            this._http.post('/api/devices/', body).subscribe({
                next: data => {
                    console.log(data);
                    var tmp = [];
                    data["results"].forEach(element => {
                        if (element.site_name == this.site_name && (this.map_id == "__any__" || element.map_id == this.map_id)) {
                            tmp.push(element);
                        }
                    });
                    this.filteredDevicesDatase = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](tmp);
                    this.filteredDevicesDatase.paginator = this.paginator;
                    this.loading = false;
                },
                error: error => {
                    var message = "There was an error... ";
                    if ("error" in error) {
                        message += error["error"]["message"];
                    }
                    this.openError(message);
                }
            });
        }
    }
    getMaps() {
        this.topBarLoading = true;
        this._http.post('/api/maps/', { host: this.host, cookies: this.cookies, headers: this.headers, org_id: this.org_id, site_name: this.site_name, role: this.role }).subscribe({
            next: data => this.parseMap(data),
            error: error => {
                var message = "There was an error... ";
                if ("error" in error) {
                    message += error["error"]["message"];
                }
                this.topBarLoading = false;
                this.openError(message);
            }
        });
    }
    parseMap(data) {
        if (data.maps.length > 0) {
            this.maps = this.sortList(data.maps, "name");
        }
        this.topBarLoading = false;
        this.map_id = "__any__";
    }
    changeMap() {
        if (this.map_id == "__any__") {
            this.claimButton = "To Site";
        }
        else {
            this.claimButton = "To Map";
        }
        this.getDevices();
    }
    locate(device) {
        if (device.isLocating == true) {
            this._http.post('/api/devices/unlocate/', { host: this.host, cookies: this.cookies, headers: this.headers, role: this.role, org_id: this.org_id, device_mac: device.mac }).subscribe({
                next: data => device.isLocating = false,
                error: error => {
                    var message = "There was an error... ";
                    if ("error" in error) {
                        message += error["error"]["message"];
                    }
                    this.openError(message);
                }
            });
        }
        else {
            this._http.post('/api/devices/locate/', { host: this.host, cookies: this.cookies, headers: this.headers, role: this.role, org_id: this.org_id, device_mac: device.mac }).subscribe({
                next: data => device.isLocating = true,
                error: error => {
                    var message = "There was an error... ";
                    if ("error" in error) {
                        message += error["error"]["message"];
                    }
                    this.openError(message);
                }
            });
        }
    }
    // MAP
    initMap() {
        this.floorplan = leaflet__WEBPACK_IMPORTED_MODULE_4__["map"]('map', {
            crs: leaflet__WEBPACK_IMPORTED_MODULE_4__["CRS"].Simple,
            //center: [-this.map.height/2, -this.map.width/2],
            minZoom: -10,
            maxZoom: 5,
            zoomSnap: 0.5,
            maxBounds: [this.map.height, this.map.width]
        });
        var bounds = [[0, 0], [this.map.height, this.map.width]];
        var image = leaflet__WEBPACK_IMPORTED_MODULE_4__["imageOverlay"](this.map.url, bounds).addTo(this.floorplan);
        this.floorplan.panTo([this.map.height, this.map.width]);
        this.floorplan.fitBounds(bounds);
        this.floorplan.on('click', function (e) {
            console.log(e);
            var latlng = e.latlng;
            var x = latlng.lat;
            var y = latlng.lng;
            console.log("You clicked the map at x: " + x + " and y: " + y);
        });
    }
    // COMMON
    sortList(data, attribute) {
        return data.sort(function (a, b) {
            var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase
            var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value.trim().toLowerCase();
        this.filteredDevicesDatase.filter = filterValue.trim().toLowerCase();
        if (this.filteredDevicesDatase.paginator) {
            this.filteredDevicesDatase.paginator.firstPage();
        }
    }
    // DIALOG BOXES
    // ERROR
    openError(message) {
        const dialogRef = this._dialog.open(_common_common_error__WEBPACK_IMPORTED_MODULE_3__["ErrorDialog"], {
            data: message
        });
    }
    // CREATE DIALOG
    openClaim() {
        var body = {
            host: this.host,
            cookies: this.cookies,
            headers: this.headers,
            org_id: this.org_id,
            site_name: this.site_name,
            map_id: this.map_id,
            claim_codes: null
        };
        const dialogRef = this._dialog.open(_common_common_claim__WEBPACK_IMPORTED_MODULE_1__["ClaimDialog"], {
            data: { body: body }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            console.log(this.site_name);
            this.getDevices();
        });
    }
    // DELETE DIALOG
    openDelete(device) {
        const dialogRef = this._dialog.open(_common_common_unclaim__WEBPACK_IMPORTED_MODULE_2__["UnclaimDialog"], {
            data: device
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                var body = {
                    host: this.host,
                    cookies: this.cookies,
                    headers: this.headers,
                    role: this.role,
                    org_id: this.org_id,
                    site_name: this.site_name,
                    map_id: this.map_id,
                    device_mac: device.mac
                };
                this._http.post('/api/devices/unclaim/', body).subscribe({
                    next: data => {
                        this.getDevices();
                        this.openSnackBar("Device " + device.mac + " successfully unprovisionned", "Done");
                    },
                    error: error => {
                        var message = "Unable to unprovision the device " + device.mac + "... ";
                        if ("error" in error) {
                            message += error["error"]["message"];
                        }
                        this.openError(message);
                    }
                });
            }
        });
    }
    // SNACK BAR
    openSnackBar(message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
            horizontalPosition: "center",
            verticalPosition: "top",
        });
    }
}
SiteComponent.ɵfac = function SiteComponent_Factory(t) { return new (t || SiteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_8__["ConnectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"])); };
SiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SiteComponent, selectors: [["app-site"]], viewQuery: function SiteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 40, vars: 16, consts: [[1, "card-outer"], ["fxLayout", "column"], ["fxLayout", "column", 1, "top-bar-container"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "top-bar", "mat-elevation-z8"], ["appearance", "outline", 1, "list"], [3, "disabled", "value", "valueChange", "selectionChange"], ["value", "__any__"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 1, "create", 2, "margin", "auto", 3, "click"], [1, "material-icons", 2, "margin", "auto 10px auto auto"], ["mat-button", "", 2, "height", "100%", "margin", "auto", 3, "click"], ["matTooltip", "Refresh list", "aria-label", "Refresh list"], ["style", "width: 100%; height: 4px; background-color: rgb(111 157 43);", 4, "ngIf"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["fxLayout", "column", 2, "background-color", "white"], ["fxLayout", "row", "fxLayoutAlign", "stretch", 2, "min-height", "800px"], ["fxLayout", "column", "fxFlex", "30%", 1, "mat-elevation-z8"], ["fxLayout", "column", 1, "psk-table-container"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "device"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], [1, "map-container"], ["fxLayout", "column", "fxLayoutAlign", "center stretch", 1, "map-frame"], ["id", "map", 3, "ngClass"], ["style", "text-align: center;font-size: large;color: gray;", 4, "ngIf"], ["class", " loading ", "fxLayout", "row ", 4, "ngIf"], [3, "value"], [2, "width", "100%", "height", "4px", "background-color", "rgb(111 157 43)"], ["mode", "indeterminate", "color", "accent"], ["mat-header-cell", ""], [2, "width", "100%"], ["matInput", "", "placeholder", "Ex. device name", 3, "keyup"], ["input", ""], ["mat-cell", ""], ["role", "button", 1, "mac", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [2, "text-align", "center", "font-size", "large", "color", "gray"], ["fxLayout", "row ", 1, "loading"], ["fxLayout", "column "]], template: function SiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function SiteComponent_Template_mat_select_valueChange_7_listener($event) { return ctx.map_id = $event; })("selectionChange", function SiteComponent_Template_mat_select_selectionChange_7_listener() { return ctx.changeMap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "All Devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, SiteComponent_mat_option_10_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SiteComponent_Template_button_click_12_listener() { return ctx.openClaim(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function SiteComponent_Template_button_click_17_listener() { return ctx.getDevices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Refresh List");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, SiteComponent_div_22_Template, 1, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, SiteComponent_mat_progress_bar_23_Template, 1, 0, "mat-progress-bar", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "table", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](29, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, SiteComponent_th_30_Template, 6, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, SiteComponent_td_31_Template, 3, 1, "td", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, SiteComponent_tr_32_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, SiteComponent_tr_33_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "mat-paginator", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, SiteComponent_div_38_Template, 2, 0, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, SiteComponent_div_39_Template, 3, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.site_name)("value", ctx.map_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.maps);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Claim Devices ", ctx.claimButton, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.topBarLoading == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.topBarLoading == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.filteredDevicesDatase);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](14, _c1, ctx.hideFloorplan));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.hideFloorplan);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__["MatPaginator"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultClassDirective"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBar"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatSpinner"]], styles: [".card-outer[_ngcontent-%COMP%] {\n        background-color: unset;\n        max-width: 1900px;\n        margin: auto;\n    }\n    \n    .top-bar-container[_ngcontent-%COMP%] {\n        margin: 1em 0;\n    }\n    \n    .top-bar[_ngcontent-%COMP%] {\n        background-color: white;\n        border-radius: 5px 5px 0 0;\n    }\n    \n    .list[_ngcontent-%COMP%] {\n        margin: 1.34375em 1em 0;\n    }\n    \n    .loading[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #ffffff9c;\n        border-radius: 5px;\n        z-index: 1000;\n    }\n    \n    .loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n        margin: auto;\n        align-self: center;\n    }\n    \n    .button-container[_ngcontent-%COMP%] {\n        display: flex;\n        width: 300px;\n        justify-content: space-between;\n    }\n    \n    .end[_ngcontent-%COMP%] {\n        justify-content: space-around !important;\n    }\n    \n    .tooltip[_ngcontent-%COMP%] {\n        color: gray;\n    }\n    \n    .tooltip[_ngcontent-%COMP%]:hover {\n        color: black;\n    }\n    \n    \n    \n    tr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%] {\n        height: 2em;\n    }\n    \n    .psk-table-container[_ngcontent-%COMP%] {\n        \n        \n        overflow: auto;\n    }\n    \n    table[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    \n    .psk-container[_ngcontent-%COMP%] {\n        border: none;\n        width: 100%;\n        min-width: 20em;\n        position: relative;\n        margin: auto;\n        border-radius: 0.3em;\n        max-width: 150em;\n    }\n    \n    .psk-table-loading-shade[_ngcontent-%COMP%] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 56px;\n        right: 0;\n        background: rgba(0, 0, 0, 0.15);\n        z-index: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    \n    \n    \n    .mat-column-action[_ngcontent-%COMP%] {\n        width: 150px !important;\n    }\n    \n    .edit[_ngcontent-%COMP%] {\n        background-color: #0d60aa !important;\n    }\n    \n    .delete[_ngcontent-%COMP%] {\n        background-color: #f44336 !important;\n    }\n    \n    a.mac[_ngcontent-%COMP%] {\n        color: #6f9d2b !important;\n        cursor: pointer;\n    }\n    \n    .location_on[_ngcontent-%COMP%] {\n        background-color: purple !important;\n    }\n    \n    .location_off[_ngcontent-%COMP%] {\n        background-color: black !important;\n    }\n    \n    .map-container[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    \n    .map-frame[_ngcontent-%COMP%] {\n        height: 100%;\n    }\n    \n    #map[_ngcontent-%COMP%] {\n        height: 100%;\n    }\n    \n    .hidden-map[_ngcontent-%COMP%] {\n        display: none;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiSUFBSTtRQUNJLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixPQUFPO1FBQ1AsV0FBVztRQUNYLFlBQVk7UUFDWiwyQkFBMkI7UUFDM0Isa0JBQWtCO1FBQ2xCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSx3Q0FBd0M7SUFDNUM7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUNBLGNBQWM7O0lBRWQ7O1FBRUksV0FBVztJQUNmOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2QixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixvQkFBb0I7UUFDcEIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixPQUFPO1FBQ1AsWUFBWTtRQUNaLFFBQVE7UUFDUiwrQkFBK0I7UUFDL0IsVUFBVTtRQUNWLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCOztJQUNBLGtCQUFrQjs7SUFFbEI7UUFDSSx1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSxvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLG1DQUFtQztJQUN2Qzs7SUFFQTtRQUNJLGtDQUFrQztJQUN0Qzs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQiIsImZpbGUiOiJzaXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmNhcmQtb3V0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgICAgICAgbWF4LXdpZHRoOiAxOTAwcHg7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgXG4gICAgLnRvcC1iYXItY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICB9XG4gICAgXG4gICAgLnRvcC1iYXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgfVxuICAgIFxuICAgIC5saXN0IHtcbiAgICAgICAgbWFyZ2luOiAxLjM0Mzc1ZW0gMWVtIDA7XG4gICAgfVxuICAgIFxuICAgIC5sb2FkaW5nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5YztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgIH1cbiAgICBcbiAgICAubG9hZGluZyBkaXYge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgXG4gICAgLmVuZCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIC50b29sdGlwIHtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuICAgIFxuICAgIC50b29sdGlwOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAvKiBTdHJ1Y3R1cmUgKi9cbiAgICBcbiAgICB0ci5tYXQtcm93LFxuICAgIHRyLm1hdC1mb290ZXItcm93IHtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgfVxuICAgIFxuICAgIC5wc2stdGFibGUtY29udGFpbmVyIHtcbiAgICAgICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAgICAgICAvKiBtYXgtaGVpZ2h0OiA0MDBweDsgKi9cbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICAgIFxuICAgIHRhYmxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5wc2stY29udGFpbmVyIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAyMGVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgICAgIG1heC13aWR0aDogMTUwZW07XG4gICAgfVxuICAgIFxuICAgIC5wc2stdGFibGUtbG9hZGluZy1zaGFkZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDU2cHg7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLyogQ29sdW1uIFdpZHRocyAqL1xuICAgIFxuICAgIC5tYXQtY29sdW1uLWFjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAuZWRpdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDYwYWEgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLmRlbGV0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgYS5tYWMge1xuICAgICAgICBjb2xvcjogIzZmOWQyYiAhaW1wb3J0YW50O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5sb2NhdGlvbl9vbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICAubG9jYXRpb25fb2ZmIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLm1hcC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLm1hcC1mcmFtZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgI21hcCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLmhpZGRlbi1tYXAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/google-maps */ "3sZV");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _login_login_2FA__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./login/login-2FA */ "+2Ah");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _common_common_claim__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./common/common-claim */ "6bIR");
/* harmony import */ var _common_common_unclaim__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./common/common-unclaim */ "pxKM");
/* harmony import */ var _common_common_error__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./common/common-error */ "Popb");
/* harmony import */ var _common_common_warning__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./common/common-warning */ "auAq");
/* harmony import */ var _common_common_claim_details__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./common/common-claim-details */ "hzNB");
/* harmony import */ var _org_org_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./org/org.component */ "IMNj");
/* harmony import */ var _site_site_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./site/site.component */ "XXkm");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _common_common_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./common/common.component */ "dPok");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/router */ "tyNb");










































class AppModule {
    // Diagnostic only: inspect router configuration
    constructor(router) {
        // Use a custom replacer to display function names in the route configs
        const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_40__["Router"])); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵdefineInjector"]({ providers: [{
            provide: _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            useValue: { color: 'accent' },
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientJsonpModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_39__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_26__["AppComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"], _login_login_2FA__WEBPACK_IMPORTED_MODULE_28__["TwoFactorDialog"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["DashboardComponent"], _common_common_claim__WEBPACK_IMPORTED_MODULE_30__["ClaimDialog"], _common_common_unclaim__WEBPACK_IMPORTED_MODULE_31__["UnclaimDialog"], _common_common_error__WEBPACK_IMPORTED_MODULE_32__["ErrorDialog"], _common_common_warning__WEBPACK_IMPORTED_MODULE_33__["WarningDialog"], _common_common_claim_details__WEBPACK_IMPORTED_MODULE_34__["ClaimDetailsDialog"],
        _org_org_component__WEBPACK_IMPORTED_MODULE_35__["OrgComponent"],
        _site_site_component__WEBPACK_IMPORTED_MODULE_36__["SiteComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_37__["MapComponent"],
        _common_common_component__WEBPACK_IMPORTED_MODULE_38__["CommonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_25__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientJsonpModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_19__["MatTableModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_23__["MatSnackBarModule"]] }); })();


/***/ }),

/***/ "auAq":
/*!******************************************!*\
  !*** ./src/app/common/common-warning.ts ***!
  \******************************************/
/*! exports provided: WarningDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningDialog", function() { return WarningDialog; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






function WarningDialog_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r2.reason);
} }
function WarningDialog_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Warning:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Changes may have impact on existing users, especially for users using PSK without VLAN. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class WarningDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ok() {
        this.dialogRef.close(true);
    }
    cancel() {
        this.dialogRef.close();
    }
}
WarningDialog.ɵfac = function WarningDialog_Factory(t) { return new (t || WarningDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
WarningDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WarningDialog, selectors: [["common-warning"]], decls: 16, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [2, "margin", "2em 0em 0", "font-weight", "bold"], [2, "list-style", "none", "padding", "0"], [4, "ngFor", "ngForOf"], ["fxLayout", "column", "style", "color: red;justify-content: center;margin: 2em 0 0;", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-button", "", "color", "accent", 3, "click"], ["fxLayout", "column", 2, "color", "red", "justify-content", "center", "margin", "2em 0 0"], [2, "font-weight", "bold", "margin", "auto"], [2, "margin", "auto"]], template: function WarningDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Be careful");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Details:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WarningDialog_li_9_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, WarningDialog_div_10_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WarningDialog_Template_button_click_12_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "I Don't Care");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WarningDialog_Template_button_click_14_listener() { return ctx.ok(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Fix It");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.vlan_check);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.bigWarning == true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], encapsulation: 2 });


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MapComponent {
    constructor() { }
    ngOnInit() {
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 2, vars: 0, template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "map works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "dPok":
/*!********************************************!*\
  !*** ./src/app/common/common.component.ts ***!
  \********************************************/
/*! exports provided: CommonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponent", function() { return CommonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CommonComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommonComponent.ɵfac = function CommonComponent_Factory(t) { return new (t || CommonComponent)(); };
CommonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonComponent, selectors: [["app-common"]], decls: 2, vars: 0, template: function CommonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "common works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tb24uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "hzNB":
/*!************************************************!*\
  !*** ./src/app/common/common-claim-details.ts ***!
  \************************************************/
/*! exports provided: ClaimDetailsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimDetailsDialog", function() { return ClaimDetailsDialog; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






class ClaimDetailsDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.details = this.data;
    }
    ngOnInit() {
        console.log(this.details);
    }
    cancel() {
        this.dialogRef.close();
    }
}
ClaimDetailsDialog.ɵfac = function ClaimDetailsDialog_Factory(t) { return new (t || ClaimDetailsDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ClaimDetailsDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ClaimDetailsDialog, selectors: [["common-claim-details"]], decls: 9, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", "color", "accent", "cdkFocusInitial", "", 3, "click"]], template: function ClaimDetailsDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Claim Result Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ClaimDetailsDialog_Template_button_click_7_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx.details));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]], encapsulation: 2 });


/***/ }),

/***/ "l5d9":
/*!**************************************!*\
  !*** ./src/app/connector.service.ts ***!
  \**************************************/
/*! exports provided: ConnectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectorService", function() { return ConnectorService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ConnectorService {
    constructor() {
        this.headersSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.cookiesSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.hostSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        this.selfSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.orgIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
        this.sitesSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.siteNameSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
        this.roleSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
        this.orgModeSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.googleApiKey = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
        this.headers = this.headersSource.asObservable();
        this.host = this.hostSource.asObservable();
        this.cookies = this.cookiesSource.asObservable();
        this.self = this.selfSource.asObservable();
        this.org_id = this.orgIdSource.asObservable();
        this.sites = this.sitesSource.asObservable();
        this.site_name = this.siteNameSource.asObservable();
        this.role = this.roleSource.asObservable();
        this.orgMode = this.orgModeSource.asObservable();
        this.google_api_key = this.googleApiKey.asObservable();
    }
    headersSet(data) {
        this.headersSource.next(data);
    }
    cookiesSet(data) {
        this.cookiesSource.next(data);
    }
    hostSet(data) {
        this.hostSource.next(data);
    }
    selfSet(data) {
        this.selfSource.next(data);
    }
    orgIdSet(data) {
        this.orgIdSource.next(data);
    }
    sitesSet(data) {
        this.sitesSource.next(data);
    }
    siteNameSet(data) {
        this.siteNameSource.next(data);
    }
    roleSet(data) {
        this.roleSource.next(data);
    }
    orgModeSet(data) {
        this.orgModeSource.next(data);
    }
    googleApiKeySet(data) {
        this.googleApiKey.next(data);
    }
}
ConnectorService.ɵfac = function ConnectorService_Factory(t) { return new (t || ConnectorService)(); };
ConnectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConnectorService, factory: ConnectorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "pxKM":
/*!******************************************!*\
  !*** ./src/app/common/common-unclaim.ts ***!
  \******************************************/
/*! exports provided: UnclaimDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnclaimDialog", function() { return UnclaimDialog; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class UnclaimDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    confirm(device_mac) {
        this.dialogRef.close(device_mac);
    }
    cancel() {
        this.dialogRef.close();
    }
}
UnclaimDialog.ɵfac = function UnclaimDialog_Factory(t) { return new (t || UnclaimDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
UnclaimDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UnclaimDialog, selectors: [["common-unclaim"]], decls: 10, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "fxLayout", "row", 2, "justify-content", "space-around"], ["mat-raised-button", "", 3, "click"], ["mat-button", "", 2, "color", "red !important", 3, "click"]], template: function UnclaimDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnclaimDialog_Template_button_click_6_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnclaimDialog_Template_button_click_8_listener() { return ctx.confirm(ctx.data.mac); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" This will delete the Device ", ctx.data.mac, ". Do you confirm?");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _org_org_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./org/org.component */ "IMNj");
/* harmony import */ var _site_site_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./site/site.component */ "XXkm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'select', component: _org_org_component__WEBPACK_IMPORTED_MODULE_3__["OrgComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'site', component: _site_site_component__WEBPACK_IMPORTED_MODULE_4__["SiteComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _login_2FA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-2FA */ "+2Ah");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _connector_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../connector.service */ "l5d9");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");

















function LoginComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const host_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", host_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", host_r4.viewValue, " ");
} }
function LoginComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_a_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r2.github_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function LoginComponent_a_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r3.docker_url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class LoginComponent {
    constructor(_formBuilder, _http, _router, _appService, _dialog, _platformLocation) {
        this._formBuilder = _formBuilder;
        this._http = _http;
        this._router = _router;
        this._appService = _appService;
        this._dialog = _dialog;
        this._platformLocation = _platformLocation;
        this.host = null;
        this.headers = {};
        this.cookies = {};
        this.self = {};
        this.hosts = [
            { value: 'api.mist.com', viewValue: 'US - manage.mist.com' },
            { value: 'api.eu.mist.com', viewValue: 'EU - manage.eu.mist.com' },
            { value: 'api.gc1.mist.com', viewValue: 'GCP - manage.gc1.mist.com' }
        ];
        // LOGIN FORM
        this.frmStepLogin = this._formBuilder.group({
            host: [''],
            credentials: this._formBuilder.group({
                email: [''],
                password: [''],
            }),
            token: [''],
        });
        this.error_mess = {
            "credentials": "",
            "token": ""
        };
    }
    //// INIT ////
    ngOnInit() {
        this.frmStepLogin = this._formBuilder.group({
            host: ['api.mist.com'],
            credentials: this._formBuilder.group({
                email: [''],
                password: [''],
            }),
            token: [""],
        });
        this._http.get('/api/gap').subscribe({
            next: data => this._appService.googleApiKeySet(data.gap),
            error: error => console.error("Unable to load the Google API Key... Maps won't be available...")
        });
        this._http.get("/api/disclaimer").subscribe({
            next: data => {
                if (data.disclaimer)
                    this.disclaimer = data.disclaimer;
                if (data.github_url)
                    this.github_url = data.github_url;
                if (data.docker_url)
                    this.docker_url = data.docker_url;
            }
        });
    }
    //// COMMON ////
    check_host() {
        if (this.frmStepLogin.value.host != '') {
            return true;
        }
        else {
            return false;
        }
    }
    // RESET AUTHENTICATION FORM
    reset_response() {
        this.host = null;
        this._appService.headersSet({});
        this._appService.cookiesSet({});
        this._appService.selfSet({});
        this._appService.hostSet(this.host);
        this.reset_error_mess();
    }
    reset_error_mess() {
        this.error_mess = {
            "credentials": "",
            "token": ""
        };
    }
    // PARSE AUTHENTICATION RESPONSE FROM SERVER
    parse_response(data) {
        if ("error" in data) {
            this.loading = false;
            this.error_mess["username"] = data.error;
        }
        else if ("data" in data) {
            if ("detail" in data.data) {
                this.error_message(data["method"], data.data.detail);
            }
            else if ("two_factor_required" in data.data && "two_factor_passed" in data.data) {
                if (data.data["two_factor_required"] == false) {
                    this.authenticated(data);
                }
                else if (data.data["two_factor_passed"] == true) {
                    this.authenticated(data);
                }
                else {
                    this.open2FA();
                }
            }
            else {
                this.authenticated(data);
            }
        }
    }
    // WHEN AUTHENTICATION IS NOT OK
    error_message(method, message) {
        this.loading = false;
        this.error_mess[method] = message;
    }
    // WHEN AUTHENTICATION IS OK
    authenticated(data) {
        this._appService.headersSet(data.headers);
        this._appService.cookiesSet(data.cookies);
        this._appService.hostSet(data.host);
        this._appService.selfSet(data.data);
        this.loading = false;
        this._router.navigate(['/select']);
    }
    //// AUTHENTICATION ////
    submitCredentials() {
        this.reset_response();
        if (this.check_host()) {
            this.loading = true;
            this._http.post('/api/login/', { host: this.frmStepLogin.value.host, email: this.frmStepLogin.value.credentials.email, password: this.frmStepLogin.value.credentials.password }).subscribe({
                next: data => this.parse_response(data),
                error: error => this.error_message("credentials", error.error.message)
            });
        }
    }
    submitToken() {
        this.reset_response();
        if (this.check_host()) {
            this.loading = true;
            this._http.post('/api/login/', { host: this.frmStepLogin.value.host, token: this.frmStepLogin.value.token }).subscribe({
                next: data => this.parse_response(data),
                error: error => this.error_message("credentials", error.error.message)
            });
        }
    }
    submit2FA(twoFactor) {
        if (this.check_host()) {
            this.loading = true;
            this._http.post('/api/login/', { host: this.frmStepLogin.value.host, email: this.frmStepLogin.value.credentials.email, password: this.frmStepLogin.value.credentials.password, two_factor: twoFactor }).subscribe({
                next: data => this.parse_response(data),
                error: error => this.error_message("credentials", error.error.message)
            });
        }
    }
    //// DIALOG BOX ////
    open2FA() {
        const dialogRef = this._dialog.open(_login_2FA__WEBPACK_IMPORTED_MODULE_0__["TwoFactorDialog"], {});
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.submit2FA(result);
            }
            else {
                this.loading = false;
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_connector_service__WEBPACK_IMPORTED_MODULE_5__["ConnectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 58, vars: 11, consts: [[1, "card-outer"], [1, "login-form", 3, "formGroup"], ["fxLayout", "column", 1, "login-form-outer", 3, "formGroup"], [1, "login-form-inner"], ["fxLayout", "column", 1, "login-step"], ["appearance", "outline"], ["formControlName", "host"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "login-form-or"], ["mat-fab", "", "color", "accent", "aria-label", "AND", 1, "disable-click"], ["fxLayout", "row", 1, "login-step"], ["formGroupName", "credentials", "fxLayout", "column", 1, "login-form-inputs"], ["matInput", "", "formControlName", "email", "type", "email"], ["matInput", "", "type", "password", "formControlName", "password", 3, "keydown.enter"], [2, "margin-bottom", "1em", "min-height", "20px"], [2, "color", "red", "font-weight", "normal"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["fxLayout", "column", 1, "login-form-or"], [3, "vertical"], ["mat-fab", "", "color", "accent", "aria-label", "OR", 1, "disable-click", 2, "margin-bottom", "4em"], ["fxLayout", "column", 1, "login-form-inputs"], ["appearance", "outline", 2, "padding", "0"], ["type", "text", "matInput", "", "formControlName", "token", 3, "keydown.enter"], ["class", "loading", "fxLayout", "row", 4, "ngIf"], [1, "disclaimer"], [1, "source"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "value"], ["fxLayout", "row", 1, "loading"], ["fxLayout", "column"], ["target", "_blank", 3, "href"], ["src", "static/github.png"], ["src", "static/docker.png"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Mist Cloud");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " AND ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Access with Login/Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_input_keydown_enter_26_listener() { return ctx.submitCredentials(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() { return ctx.submitCredentials(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Continue with credentials");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "mat-divider", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " OR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "mat-divider", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Access with API Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "API Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.enter", function LoginComponent_Template_input_keydown_enter_44_listener() { return ctx.submitToken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_49_listener() { return ctx.submitToken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Continue with API Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, LoginComponent_div_51_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, LoginComponent_a_56_Template, 2, 1, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, LoginComponent_a_57_Template, 2, 1, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.frmStepLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.frmStepLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.hosts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.error_mess.credentials);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.error_mess.token);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.disclaimer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.github_url);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.docker_url);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"]], styles: ["mat-card[_ngcontent-%COMP%] {\n    background-color: rgb(236 236 236);\n}\n\n.login-form-inner[_ngcontent-%COMP%] {\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 50em;\n    position: relative;\n    margin: auto;\n    padding: 2em;\n    border-radius: 0.3em;\n}\n\n.login-form-outer[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: rgb(236 236 236);\n}\n\n.login-form-inputs[_ngcontent-%COMP%] {\n    padding: 10px;\n    width: 25em;\n    text-align: center;\n    justify-content: space-between;\n}\n\n.login-form-or[_ngcontent-%COMP%] {\n    padding: 10px;\n    text-align: center;\n    justify-content: space-between;\n}\n\n.disable-click[_ngcontent-%COMP%] {\n    pointer-events: none;\n    cursor: default;\n}\n\n.login-step[_ngcontent-%COMP%] {\n    border: solid 1px lightgray;\n    background-color: white;\n    border-radius: 5px;\n    margin: -2em;\n    padding: 2em;\n}\n\n.loading[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #ffffff9c;\n    border-radius: 5px;\n}\n\n.loading[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: auto;\n    align-self: center;\n}\n\n.disclaimer[_ngcontent-%COMP%] {\n    width: 50em;\n    text-align: center;\n    margin: 5em auto;\n    text-transform: uppercase;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-weight: 100;\n    font-size: smaller;\n}\n\n.source[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n\n.source[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 1em;\n    height: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaURBQWlEO0lBQ2pELGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiAyMzYgMjM2KTtcbn1cblxuLmxvZ2luLWZvcm0taW5uZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogNTBlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuLmxvZ2luLWZvcm0tb3V0ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYgMjM2IDIzNik7XG59XG5cbi5sb2dpbi1mb3JtLWlucHV0cyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubG9naW4tZm9ybS1vciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZGlzYWJsZS1jbGljayB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4ubG9naW4tc3RlcCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggbGlnaHRncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IC0yZW07XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4ubG9hZGluZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOWM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubG9hZGluZyBkaXYge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kaXNjbGFpbWVyIHtcbiAgICB3aWR0aDogNTBlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1ZW0gYXV0bztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbn1cblxuLnNvdXJjZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zb3VyY2UgaW1nIHtcbiAgICBtYXJnaW46IDFlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map