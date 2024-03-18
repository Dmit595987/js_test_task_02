document.addEventListener("DOMContentLoaded", function() {

    const arr_names = [
        "input_1", "input_2", "input_3", "input_4", "input_5", "input_6", "input_7",
        "button_12", "button_28", "button_88", "button_33", "button_1",
    ];

    const selectElement = document.querySelector('select[name="type_val"]');
    selectElement.addEventListener('change', function (){
        for(let name of arr_names){
            if(name.split('').includes(this.value)){
                console.log(this.value, name);
                let parent = document.getElementsByName(name)[0].parentElement;
                parent.style.display = 'none';
            }else {
                let parent = document.getElementsByName(name)[0].parentElement;
                parent.style.display = 'block';
            }
        }
    });
});
