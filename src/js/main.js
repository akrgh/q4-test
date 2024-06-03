var reportsSection = document.querySelector(".reports");

function generateReport(report) {
  var reportElement = document.createElement("div");
  reportElement.classList.add("report");

  var image = document.createElement("img");
  image.src = report.cover;
  image.alt = "Report Cover";

  var textContainer = document.createElement("div");
  textContainer.classList.add("bg-text");

  for (var i in report.documents) {
    var reportTitle = document.createElement("h2");
    var fileSize = document.createElement("span");
    fileSize.textContent = ` (${report.documents[i].file_size})`;
    reportTitle.textContent = report.documents[i].title;
    reportTitle.appendChild(fileSize);
    textContainer.appendChild(reportTitle);
  }

  textContainer.appendChild(reportTitle);
  reportElement.appendChild(image);
  reportElement.appendChild(textContainer);
  reportsSection.appendChild(reportElement);
}

reportData.forEach(generateReport);
