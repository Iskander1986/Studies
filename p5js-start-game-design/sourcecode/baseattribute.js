class BaseAttribtute {
    
    constructor(fire_resistance = 0.0, 
                water_resistance = 0.0, 
                wind_resistance = 0.0,
                strength = 0, 
                life = 0, 
                defense = 0.0, 
                atttack = 0.0, 
                speed = 0){
        this.fire_resistance = fire_resistance;
        this.water_resistance = water_resistance;
        this.wind_resistance = wind_resistance;
        this.strength = strength;
        this.life = life;
        this.defense = defense;
        this.atttack = atttack;
        this.speed = speed;     
    }

    getFireResistance (){
        return this.fire_resistance;
    }

    getWaterResistance (){
        return this.water_resistance;
    }

    getWindResistance (){
        return this.wind_resistance;
    }

    getLife(){
        return this.life;
    }

    getStrength(){
        return this.strength;
    }

    getDefense(){
        return this.defense;
    }

    getAttack(){
        return this.atttack;
    }
    
    getSpeed(){
        return this.speed;
    }
    
    setSpeed(speed = 0.0){
        this.speed = speed;
    }

    setStrenght (strength = 0){
        this.strength = strength;
    }

    setAttack (attack = 0.0){
        this.atttack = attack;
    }

    setDefense (defense = 0.0){
        this.defense = defense;
    }        

    updateLife (value_to_add){
        this.life += value_to_add;
    }

    updateNextLevel (){
        this.life += 12.5*100;
        this.speed += 1.2*100;
        this.strength += 10;
        this.atttack += 1.15*100;
        this.defense += 1.12*100;
        this.water_resistance += 0.75*100;
        this.wind_resistance += 0.75*100;
        this.fire_resistance += 0.75*100;
    }    
}