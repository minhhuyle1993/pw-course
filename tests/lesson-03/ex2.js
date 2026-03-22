const height = 170; //Chiều cao tính theo cm, 100 < chiều cao < 200

max_weight = height % 100;  // Hoặc = height - 100 vì trong range 100 -> 200
ideal_weight = max_weight * 9 / 10;
min_weight = max_weight * 8 / 10


console.log("Cân nặng lý tưởng:", ideal_weight, "Cân nặng tối đa: ", max_weight, "Cân nặng tối thiểu: ", min_weight);
