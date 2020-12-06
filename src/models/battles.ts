import { Player } from './player';

export class Battles {
    constructor(
        public id?: number,
        public playerOne?: Player,
        public playerTwo?: Player,
        public winningPlayer?: Player,
    ) { }
}
