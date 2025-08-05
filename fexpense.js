let expense_per_category = [0, 0, 0, 0, 0];
var count = 4;

update_sum();

function update_sum() {
    var sum = document.querySelectorAll(".sum");
    for (var i = 0; i < sum.length; i++) {
        sum[i].innerHTML = "-" + expense_per_category[i] + " Rs.spent";
    }
}

function add_expense() {
    var amount = document.getElementsByClassName("form-input")[0].value;
    var date = document.getElementsByClassName("form-input")[2].value;
    var note = document.getElementsByClassName("form-input")[3].value;
    var category = document.getElementsByClassName("form-input")[1].selectedIndex;
    var selected = document.getElementsByTagName("option")[category].value;

    if (amount && date && note && selected) {
        alert("Successfully added expense!");
        var table = document.getElementsByTagName("table")[0];
        var new_row = document.createElement("tr");
        new_row.innerHTML = `
            <td>${amount}</td>
            <td>${selected}</td>
            <td>${date}</td>
            <td>${note}</td>
        `;

        table.appendChild(new_row);

        expense_per_category[category] = parseInt(expense_per_category[category]) + parseInt(amount);
        update_sum();
        document.getElementsByClassName("add-new-expense")[0].style.display = "none";
    } else {
        alert("Please enter all details!");
    }
}

function add_category() {
    var new_category_value = document.getElementsByName("new-category")[0].value;
    if (new_category_value) {
        var dropdown = document.getElementsByName("category")[0];
        var available_categories = document.getElementsByClassName("available-categories")[0];

        // Add new option to dropdown
        var new_category_option = document.createElement("option");
        new_category_option.textContent = new_category_value;
        dropdown.appendChild(new_category_option);

        // Add category to summary
        count++;
        expense_per_category[count] = 0;

        var new_category_span = document.createElement("span");
        var sum_span = document.createElement("span");
        sum_span.className = "sum";
        sum_span.textContent = `-0 Rs.spent`;

        new_category_span.textContent = `${new_category_value} `;
        new_category_span.appendChild(sum_span);
        available_categories.appendChild(new_category_span);

        document.getElementsByClassName("add-category")[0].style.display = "none";
    }
}

function add_category_page() {
    var form = document.getElementsByClassName("add-category")[0];
    form.style.display = (form.style.display === "block") ? "none" : "block";
}

function add_expense_page() {
    var form = document.getElementsByClassName("add-new-expense")[0];
    form.style.display = (form.style.display === "block") ? "none" : "block";
}
