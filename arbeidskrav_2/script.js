
const categories = {
  'html': resources.filter((res) => res.category.toLowerCase() === 'html'),
  'css': resources.filter((res) => res.category.toLowerCase() === 'css'),
  'javascript': resources.filter((res) => res.category.toLowerCase() === 'javascript'),
  'react': resources.filter((res) => res.category.toLowerCase() === 'react'),
  'sanity and headless cms': resources.filter((res) => res.category.toLowerCase() === 'sanity and headless cms'),
};

const content = document.getElementById("content");
const buttons = document.querySelectorAll("#tab-container button");


function updateContent(categoryName) {
  
  const categoryKey = categoryName.toLowerCase();
  const selectedResources = categories[categoryKey];

  if (selectedResources) {
    content.innerHTML = selectedResources.map(resource => {
      const links = resource.sources.map(link => `<li><a target="_blank" href="${link.url}">${link.title}</a></li>`).join("");
      return `<h2>${resource.category}</h2><p>${resource.text}</p><ul>${links}</ul>`;
    }).join("");

    
    buttons.forEach(btn => btn.classList.toggle("active", btn.textContent.trim().toLowerCase() === categoryKey));
  } else {
    content.innerHTML = `<p>No resources found for the category "${categoryName}"</p>`;
  }
}


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const categoryName = button.textContent.trim(); 
    updateContent(categoryName);
  });
});


updateContent("HTML");
