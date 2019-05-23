var $tae = {
    el: function (el) {

        return {
            on: function (evt, callback) {

                // split elements with ,
                var multiElements = el.split(", ");

                // loop each elements
                Array.from(multiElements).forEach((e) => {

                    var obj;

                    if (e[0] == "#") {
                        var obj = document.getElementById(e.substring(1, e.length));
                        obj.addEventListener(evt, callback);
                    } else if (e[0] == ".") {
                        var obj = document.getElementsByClassName(e.substring(1, e.length));
                        // add event listener for each class
                        Array.from(obj).forEach((o) => {
                            o.addEventListener(evt, callback);
                        });
                    } else {
                        obj = document.getElementsByTagName(el);
                        // add event listener for each element tag
                        Array.from(obj).forEach((o) => {
                            o.addEventListener(evt, callback);
                        });
                    }

                });
            },
            set: function(val) {
                document.getElementById(el.substring(1, el.length)).innerHTML = val;
            },
            get: function() {

                if (el[0] == "#") {
                    var item = document.getElementById(el.substring(1, el.length));
                    return item.value;
                } else if (el[0] == ".") {
                    var items = document.getElementsByClassName(el.substring(1, el.length));

                    var msg = [];
                    Array.from(items).forEach((elem) => {
                        if (elem.value != '') { 
                            msg.push(elem.value) 
                        }
                    });
                    return msg
                }
            },
            getData: function() {

                if (el[0] == ".") {
                    var items = document.getElementsByClassName(el.substring(1, el.length));

                    var data = new FormData()

                    Array.from(items).forEach((elem) => {
                        if (elem.value != '') { 
                            data.append(elem.name, elem.value);
                        } else {
                            data.append(elem.name, elem.value);
                        }
                    });

                    return data
                }
            }
        }
    },
    getParentId: function(id) {
        return document.getElementById(id);
    },
    createElem: function(el) {
        return document.createElement(el);
    },
    setInnerHTML: function(el, txt) {
        el.appendChild(document.createTextNode(txt));
    },
    setAttr: function(el, attrs) {
        for(var key in attrs) {
            el.setAttribute(key, attrs[key])
        }
    },
    appendElem: function (parent, child) {
        parent.appendChild(child);
    },
    getElemCount: function (parent) {
        return parent.childElementCount;
    },
    sendHTTPRequest: function (data) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(this.responseText);
                console.log(res)
                // res.data.forEach( doc => {
                //     console.log(doc);
                // })
            }
        };
        xhttp.open("POST", "http://localhost:10080/act567/api.php", true);
        xhttp.send(data);
    }
}
