
let ElectricLamp = function () {
    this.status = undefined;
}

ElectricLamp.prototype.turnOn = function(){
    this.status = true;
    alert('Den sang');
}

ElectricLamp.prototype.turnOff = function (){
    this.status = false;
    alert('Den tat');
}



let SwitchButton = function () {
    this.status = undefined;
    //this.connect = undefined;
}

SwitchButton.prototype.connectToLamp = function (lamp) {
    this.connect = lamp;
}

SwitchButton.prototype.switchOn = function () {
    this.status = true;
    return this.connect.turnOn();
}

SwitchButton.prototype.switchOff = function () {
    this.status = false;
    return this.connect.turnOff();
}


let lamp = new ElectricLamp();
let _switch = new SwitchButton();
_switch.connectToLamp(lamp);



function _switchClick() {
    if (_switch.status){
        this.checked;
        _switch.switchOff();
    }else {
        _switch.switchOn();
    }
}
function init() {
    let div = document.createElement('div');
    div.id = "switch";
    document.body.appendChild(div);
    document.getElementById('switch').innerHTML =
        "<div class=\"main\" style=\'text-align: center\'>\n" +
        "    <table>\n" +
        "        <tr>\n" +
        "            <td>Cong tac</td>\n" +
        "            <td>\n" +
        "                <label class=\"switch\">\n" +
        "                    <input onclick=\'_switchClick(this)\' type=\"checkbox\">\n" +
        "                    <span class=\"slider round\"></span>\n" +
        "                </label>\n" +
        "            </td>\n" +
        "        </tr>\n" +
        "    </table>\n" +
        "</div>"


}
