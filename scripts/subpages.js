
const caminhos = {
    int_frame: "../pages/subpages/art01.html",
  };
  
  const imagem = document.getElementById('image_click');
  const frame_element = document.getElementById('frame_element');
  const frame_container = document.getElementById('frame_container');
  
  imagem.addEventListener('click', function() {
    frame_element.src = caminhos.int_frame; 
    frame_container.style.display = 'block';
  });
  