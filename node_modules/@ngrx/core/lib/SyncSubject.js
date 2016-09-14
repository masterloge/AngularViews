var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ReplaySubject } from 'rxjs/ReplaySubject';
export var SyncSubject = (function (_super) {
    __extends(SyncSubject, _super);
    function SyncSubject(value) {
        _super.call(this, 1);
        this.next(value);
    }
    return SyncSubject;
}(ReplaySubject));
