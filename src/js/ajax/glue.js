function getthehtml() {
    var num_array, get_file;
    var get_tag = document.getElementsByTagName("*");
    for (num_array = 0; num_array < get_tag.length; num_array++) {
        var value_of_num_array = get_tag[num_array];
        if (get_file = value_of_num_array.getAttribute("getfile")) {
            get_tag = new XMLHttpRequest();
            get_tag.onreadystatechange = function () {
                4 == this.readyState && (200 == this.status && (value_of_num_array.innerHTML = this.responseText), 404 == this.status && (value_of_num_array.innerHTML = "Page not found."), value_of_num_array.removeAttribute("getfile"), getthehtml());
            };
            get_tag.open("GET", get_file, !0);
            get_tag.send();
            break;
        }
    }
}
getthehtml(); //thực thi code các thứ owo