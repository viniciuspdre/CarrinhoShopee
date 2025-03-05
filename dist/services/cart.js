"use strict";
// quais acoes meu carrinho
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcSubTotal = void 0;
exports.addItem = addItem;
exports.deleteItem = deleteItem;
exports.removeItem = removeItem;
exports.calcTotal = calcTotal;
const item_1 = require("./item");
Object.defineProperty(exports, "calcSubTotal", { enumerable: true, get: function () { return item_1.calcSubTotal; } });
// adicionar item
function addItem(userCart, item) {
    return __awaiter(this, void 0, void 0, function* () {
        userCart.push(item);
    });
}
// deletar item
function deleteItem(userCart, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const index = userCart.findIndex((item) => item.id == id);
        if (index != -1) {
            userCart.splice(index, 1);
        }
    });
}
// diminuir um item
function removeItem(userCart, item) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
// calcular o total
function calcTotal(userCart) {
    return __awaiter(this, void 0, void 0, function* () {
        let sum = 0;
        for (const element of userCart) {
            sum += yield (0, item_1.calcSubTotal)(element);
        }
        return sum.toFixed(2);
    });
}
