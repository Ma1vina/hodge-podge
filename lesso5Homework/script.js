const DEFAULT_FUEL = 5;
const DEFAULT_DURABILITY = 100;
const DEFAULT_SPEED = 10;
const DEFAULT_TRACK = 200;

class Cars {
  constructor(name = "Unknown car") {
    this.fuel = 0;
    this.lowFuelConsumption = 0;
    this.durability = 0;
    this.name = name;
    this.speed = 0;
  }

  getPowerReserve(fuel, lowFuelConsumption) {
    const totalFuel = DEFAULT_FUEL + fuel;
    return (
      totalFuel * DEFAULT_TRACK +
      totalFuel * 0.1 * DEFAULT_TRACK * lowFuelConsumption
    );
  }

  getOverallDurability(durability) {
    return DEFAULT_DURABILITY + durability * 0.1 * DEFAULT_DURABILITY;
  }

  getOverallSpeed(speed) {
    return DEFAULT_SPEED + speed * 0.05 * DEFAULT_SPEED;
  }
}

class Civilian extends Cars {
  fuel = 2;
  lowFuelConsumption = 2;
  durability = 2;
  speed = 4;
}

class Sport extends Cars {
  fuel = 2;
  lowFuelConsumption = 1;
  durability = 1;
  speed = 6;
}

class Military extends Cars {
  fuel = 2;
  lowFuelConsumption = 2;
  durability = 4;
  speed = 2;
}

const buttonContinue = document.querySelector("#btn-continue");
const btnSave = document.querySelector(".btn-save");
const btnSaveRiv = document.querySelector(".btn-save-riv");

const selectCar = document.querySelector(".select-car");
const tuning = document.querySelector(".tuning");
const rivals = document.querySelector(".rivals");
const table = document.querySelector(".table");

let carKind;
buttonContinue.addEventListener("click", function () {
  let radios = document.querySelectorAll('input[type="radio"]');
  for (let radio of radios) {
    if (radio.checked) {
      carKind = chooseCarKind(radio.id);
      selectCar.remove();
      tuning.classList.remove("hidden");
      initSettingCar(carKind);
    }
  }
});

const cars = [];
btnSave.addEventListener("click", () => {
  cars.push(getSettings(tuning));
  tuning.remove();
  rivals.classList.remove("hidden");
});

btnSaveRiv.addEventListener("click", () => {
  const quantityBots = +rivals.children.quantity_riv.value;
  rivals.remove();
  cars.push(...getRival(quantityBots));
  table.classList.remove("hidden");
  getStatistics(compare(cars));
});

function initSettingCar(carKind) {
  const { fuel, lowFuelConsumption, durability, speed, power_reserve } =
    tuning.children;
  fuel.value = carKind.fuel;
  fuel.min = carKind.fuel;
  lowFuelConsumption.value = carKind.lowFuelConsumption;
  lowFuelConsumption.min = carKind.lowFuelConsumption;
  durability.value = carKind.durability;
  durability.min = carKind.durability;
  speed.value = carKind.speed;
  speed.min = carKind.speed;
  power_reserve.value = carKind.getPowerReserve(
    +fuel.value,
    +lowFuelConsumption.value
  );
  tuning.addEventListener("change", () => {
    btnSave.disabled = false;
    const sum =
      +fuel.value +
      +lowFuelConsumption.value +
      +durability.value +
      +speed.value;
    if (sum > 12) {
      btnSave.disabled = true;
      alert("Превышен лимит распределяемых очков");
    } else {
      btnSave.disabled = false;
      power_reserve.value = carKind.getPowerReserve(
        +fuel.value,
        +lowFuelConsumption.value
      );
    }
  });
}

function getStatistics(arrCars) {
  arrCars.forEach((el, i, arr) => {
    let div = document.createElement("div");
    div.classList.add("table_list");
    let name = document.createElement("div");
    if (arr[i] === arr[0]) {
      name.textContent = `1. You ${el.name}`;
      name.classList.add("name");
    } else {
      name.textContent = el.name;
      name.classList.add("name");
    }
    let powerReserve = document.createElement("div");
    powerReserve.textContent = el.powerReserve;
    powerReserve.classList.add("power_reserve");

    let durability = document.createElement("div");
    durability.textContent = el.durability;
    durability.classList.add("durability");

    let speed = document.createElement("div");
    speed.textContent = el.speed;
    speed.classList.add("speed");
    div.append(name);
    div.append(powerReserve);
    div.append(durability);
    div.append(speed);
    table.append(div);
  });
}

function getSettings(list) {
  const { fuel, lowFuelConsumption, durability, speed } = list.children;
  return {
    fuel: +fuel.value,
    lowFuelConsumption: +lowFuelConsumption.value,
    durability: +durability.value,
    speed: +speed.value,
    name: carKind.name,
  };
}

function chooseCarKind(kind) {
  const kinds = ["civil", "sport", "military"];
  if (!kind) {
    const i = Math.floor(Math.random() * kinds.length);
    kind = kinds[i];
  }
  switch (kind) {
    case "civil":
      return new Civilian("Civilian");
    case "sport":
      return new Sport("Sport");
    case "military":
      return new Military("Military");
  }
};

function getRival(qty) {
  const arr = [];
  for (let i = 0; i < qty; i++) {
    arr.push(compose(setParamOfPlayers, setParamOfPlayers)(chooseCarKind()));
  }
  return arr.map((car, i) => {
    return {...car, name: `${i + 2}. Player ${car.name}`};
  });
}

function compose(...funcs) {
  return (comp) => {
    return funcs.reduceRight((res, f) => f(res), comp);
  };
}

function setParamOfPlayers(player) {
  const randomNum = Math.floor(Math.random() * 4);
  switch (randomNum) {
    case 0:
      player.fuel++;
      return player;
    case 1:
      player.lowFuelConsumption++;
      return player;
    case 2:
      player.durability++;
      return player;
    case 3:
      player.speed++;
      return player; 
  }
}

function compare(arrForCar){
  let carsAverages = arrForCar.map((elem) => {
    const { fuel, lowFuelConsumption, durability, speed, name } = elem;
    return {
      name,
      powerReserve: Cars.prototype.getPowerReserve(fuel, lowFuelConsumption),
      durability: Cars.prototype.getOverallDurability(durability),
      speed: Cars.prototype.getOverallSpeed(speed),
    };
  });

  let maxPowerReserve = 0;
  let maxDurability = 0;
  let maxSpeed = 0;

  carsAverages.forEach((elem) => {
    const { powerReserve, durability, speed } = elem;
    maxPowerReserve =
      powerReserve > maxPowerReserve ? powerReserve : maxPowerReserve;
    maxDurability = durability > maxDurability ? durability : maxDurability;
    maxSpeed = speed > maxSpeed ? speed : maxSpeed;
  });

  let result = carsAverages.map((car) => {
    const { powerReserve, durability, speed, name } = car;
    return {
      name,
      powerReserve: `${Math.round((powerReserve * 100) / maxPowerReserve)}%`,
      durability: `${Math.round((durability * 100) / maxDurability)}%`,
      speed: `${Math.round((speed * 100) / maxSpeed)}%`,
    };
  });
  return result;
};
