let main

document.addEventListener("DOMContentLoaded", () => {
//There must be a div with the class name main in your index.html file. All components will be appended to this div
  main = document.querySelector(".main")
  
  //Replace the url in the fetch with the url your google docs csv url
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vTjwUDudERiPQxGNO8rfh2k0xdlC8KvqkY-AV0nmhCY1FOikMIw258KxS3B3AlUR9v7vTBg9lTmcpLf/pub?gid=0&single=true&output=csv")
    .then(response => response.text())
    .then(csvData => {
      Papa.parse(csvData, {
        header: true, // Treat the first row as column headers
        skipEmptyLines: true, // Ignore empty rows
        complete: function(results) {
          results.data.forEach(row => {
            displayComponent(row);
          });
        }
      });
    });
});

function displayComponent(row){
  console.log(row)
  //your code here
  let component = document.createElement("div")
  component.classList.add("cave-component")


  let name = document.createElement("p")
  name.textContent = row.Name
  name.classList.add("name")

  let image = document.createElement("img")
  image.src = "images/" + row.Image
  image.classList.add("cave-image")
  
  component.addEventListener("click", function(){
    window.open(row.Page)
  })

component.append(name)
component.append(image)
main.append(component)
}
