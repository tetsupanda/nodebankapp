import Checking from "../baseAccountTypes/Checking";

export default class Individual extends Checking {
    public withDrawLimit: number = 1000;
}