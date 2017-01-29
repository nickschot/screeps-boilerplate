import harvester from './roles/harvester';

import game from './control/game';

module.exports.loop = function(){
    Memory = JSON.parse(RawMemory.get());

    Object.keys(Memory.creeps).forEach((name) => {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    });

    game.run();

    Object.keys(Game.creeps).forEach((name) => {
        let creep = Game.creeps[name];

        let {
            memory: {
                role
            }
        } = creep;

        if(role == 'harvester') {
            harvester.run(creep);
        }
    });

    RawMemory.set(JSON.stringify(Memory));
};