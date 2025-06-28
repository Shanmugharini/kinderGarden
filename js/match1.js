<body class="greenTheme q-c-dark-secondary">
  <h1 >Match the correct translations</h1>
  <div id="dragQuestion" class="linkingQuestion">
    <ul id="dragUL">
      <li>Interview<div id="1-draggable"    class="dragElement" draggable="true"><i class="far fa-circle"></i></div></li>
      <li>Road<div id="2-draggable"         class="dragElement" draggable="true"><i class="far fa-circle"></i></div></li>
      <li>Necklace<div id="3-draggable"      class="dragElement" draggable="true"><i class="far fa-circle"></i></div></li>
      <li>Cockroach<div id="4-draggable"    class="dragElement" draggable="true"><i class="far fa-circle"></i></div></li>  
      <li>Screwdriver<div id="5-draggable"  class="dragElement" draggable="true"><i class="far fa-circle"></i></div></li>
    </ul>
    <div class="canvasWrapper">
      <canvas id="canvas"></canvas>
      <canvas id="canvasTemp"></canvas>
    </div>
    <ul id="dropUL">
      <li><div id="1-dropzone"  onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Marcassin</li>
      <li><div id="2-dropzone"  onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Tournevis</li>
      <li><div id="3-dropzone"  onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Petit four</li>
      <li><div id="4-dropzone"  onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Cafard</li>
      <li><div id="5-dropzone"  onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Route</li>
      <li><div id="6-dropzone"  onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Tulipe</li>
      <li><div id="7-dropzone"  onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Entretien</li>
      <li><div id="8-dropzone"  onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Rhdodendron</li>
      <li><div id="9-dropzone"  onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Omelette du fromage</li>
      <li><div id="10-dropzone" onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Baguette</li>
      <li><div id="11-dropzone" onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Collier</li>
      <li><div id="12-dropzone" onclick="clearPath(event)" class="dragElement dropElement"> <i class="far fa-circle"></i> </div>Pain au chocolatine</li>

    </ul>
  </div>

  <button class="q-btn q-main" onClick="Correction()">Correction</button>
</body>