var arr = new Array(10);

function fillArray(arr) {
	for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.ceil(Math.random() * 100);
        arr[i] *= Math.round(Math.random()) ? 1 : -1;
    }
}

function replaceFromArray(arr) {
	for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
}

function addToArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0 && arr[i] == 0) {
            arr.splice(i + 1, 0, -1);
        }
    }
}

fillArray(arr)
console.log("Заполнение массива случайными числами от -100 до 100 включительно:\n" + arr)

replaceFromArray(arr)
console.log("Замена отрицательных чисел нулями:\n" + arr)

addToArray(arr)
console.log("Добавление значения \"-1\" в массив после каждого элемента с четными индексом, который равен нулю (с учетом сдвига индексов элементов):\n" + arr)