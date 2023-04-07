function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.innerText);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var leftContainer = event.target;
    
    if (leftContainer.classList.contains("left-container")) {
      var newElement = document.createElement("div");
      newElement.innerText = data;
      newElement.classList.add("dropped-element");
      leftContainer.appendChild(newElement);
      
      // Thêm sự kiện click để xóa phần tử
      newElement.addEventListener("click", function() {
        newElement.remove();
      });
    }
  }
  