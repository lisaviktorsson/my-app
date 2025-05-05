<!-- The main SVG element with a class "img", a coordinate system (viewBox), and SVG namespace -->
<svg class="img" viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">

  <!-- <defs> is used to define reusable elements like patterns, gradients, clipPaths, etc. -->
  <defs>
  
    <!-- Define a pattern with an ID so it can be referenced later.
         - patternUnits="userSpaceOnUse" makes the pattern use the same coordinate space as the SVG.
         - width and height define the size of the pattern area. -->
    <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="1200" height="300">

      <!-- This image is embedded into the pattern.
           - href: the URL of the image to be used.
           - x and y: position the image at the top-left corner of the pattern.
           - width and height: size of the image to match the SVG viewBox.
           - preserveAspectRatio: controls how the image scales/crops to fit the shape. -->
     
    </pattern>
  </defs>

  <!-- The actual shape you want to fill: a polygon with custom points.
       - points define the corners of the polygon (custom shape).
       - fill uses the pattern defined above to fill the shape with the image. -->
       <svg class="img" viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="1200" height="300">
            <image 
              href="https://static1.squarespace.com/static/5ac3533bb27e39f181f34a32/t/60a67a9324c06f7ab8f7ea2e/1621523101366/unsplash-image-8iZG31eXkks.jpg?format=1500w" 
              x="0" y="0" 
              width="1200" height="300" 
              preserveAspectRatio="xMidYMid slice" 
            />
          </pattern>
        </defs>
      
        <!-- The actual shape you want to fill: a polygon with custom points.
       - points define the corners of the polygon (custom shape).
       - fill uses the pattern defined above to fill the shape with the image. -->

        <!-- Polygon shape filled with the image pattern
        "
            0 0,          Top-left corner (x=0, y=0)
            1200 0,       Top-right corner (x=1200, y=0) — same height as top-left, so it's a straight top edge 
            1200 300,     Bottom-right corner (x=1200, y=300) — full height on the right 
            0 180,        Bottom-left corner (x=0, y=180) — lower than the top but higher than the bottom-right 
            0 0          Back to the start to close the shape 
          "  
        
        
        -->
        <polygon 
        points="0 0, 1200 0, 1200 300, 0 150, 0 0" 
        fill="url(#imgPattern)" 
      />
      </svg>
      

</svg>


<!-- The main SVG element with a class "img", a coordinate system (viewBox), and SVG namespace -->
<svg style="margin-top:-120px;" class="img" viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">

  <!-- <defs> is used to define reusable elements like patterns, gradients, clipPaths, etc. -->
  <defs>
  
    <!-- Define a pattern with an ID so it can be referenced later.
         - patternUnits="userSpaceOnUse" makes the pattern use the same coordinate space as the SVG.
         - width and height define the size of the pattern area. -->
    <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="1200" height="300">

      <!-- This image is embedded into the pattern.
           - href: the URL of the image to be used.
           - x and y: position the image at the top-left corner of the pattern.
           - width and height: size of the image to match the SVG viewBox.
           - preserveAspectRatio: controls how the image scales/crops to fit the shape. -->
       
    </pattern>
  </defs>

  <!-- The actual shape you want to fill: a polygon with custom points.
       - points define the corners of the polygon (custom shape).
       - fill uses the pattern defined above to fill the shape with the image. -->
       <svg class="img" viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="imgPattern" patternUnits="userSpaceOnUse" width="1200" height="300">
            <image 
              href="https://static1.squarespace.com/static/5ac3533bb27e39f181f34a32/t/60a67a9324c06f7ab8f7ea2e/1621523101366/unsplash-image-8iZG31eXkks.jpg?format=1500w" 
              x="0" y="0" 
              width="1200" height="300" 
              preserveAspectRatio="xMidYMid slice" 
            />
          </pattern>
        </defs>
      
        <!-- The actual shape you want to fill: a polygon with custom points.
       - points define the corners of the polygon (custom shape).
       - fill uses the pattern defined above to fill the shape with the image. -->
       
        <!-- Polygon shape filled with the image pattern
        "
            0 0,          Top-left corner (x=0, y=0)
            1200 0,       Top-right corner (x=1200, y=0) — same height as top-left, so it's a straight top edge 
            1200 300,     Bottom-right corner (x=1200, y=300) — full height on the right 
            0 180,        Bottom-left corner (x=0, y=180) — lower than the top but higher than the bottom-right 
            0 0          Back to the start to close the shape 
          "  
        
        
        -->
        <polygon 
        points="0 0, 1200 150, 1200 300, 0 300, 0 0" 
        fill="url(#imgPattern)" 
      />
      </svg>
      

</svg>
