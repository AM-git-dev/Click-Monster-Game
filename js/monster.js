export class Monster {
    constructor() {
        this.level = 1;
        this.baseHp = 100;
        this.currentHp = this.baseHp;
        this.maxHp = this.baseHp;
    }

    spawn() {
        this.maxHp = Math.floor(this.baseHp * (1 + this.level * 0.6));
        this.currentHp = this.maxHp;
        this.updateLifebar();
        this.updateLevelDisplay();
    }

    takeDamage(damage) {
        this.currentHp -= damage;
        if (this.currentHp <= 0) {
            this.level++;
            this.spawn();
            return true;
        } else {
            this.updateLifebar();
            return false;
        }
    }

    updateLifebar() {
        const lifebar = document.getElementById('lifebar');
        const widthPercentage = (this.currentHp / this.maxHp) * 100;
        lifebar.style.width = `${widthPercentage}%`;
    }

    updateLevelDisplay() {
        document.getElementById('level-display').textContent = `Niveau : ${this.level}`;
    }
}
