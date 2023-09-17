<div class="container">
  <div class="loader">
      <span>M</span>
      <span>O</span>
      <span>B</span>
      <span>A</span>
      <span>R</span>
      <span>E</span>
      <span>Z</span>
    </div>
</div>

.loader {
    -webkit-perspective: 700px;
    perspective: 700px;
    background: transparent;
    padding: 10px 20px;
  }
  
  .loader>span {
    font-size: 60px;
    font-family: "franklin gothic medium",sans-serif;
    display: inline-block;
    animation: flip 2.6s infinite linear;
    transform-origin: 0 70%;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
  }
  
  @keyframes flip {
    35% {
      transform: rotatez(360deg);
    }
  
    100% {
      transform: rotatez(360deg);
    }
  }
  
  .loader>span:nth-child(odd) {
    color: white;
  }
  
  .loader>span:nth-child(even) {
    color: #A8B2D1;
  }
  
  .loader>span:nth-child(2) {
    animation-delay: 0.3s;
  }
  
  .loader>span:nth-child(3) {
    animation-delay: 0.6s;
  }
  
  .loader>span:nth-child(4) {
    animation-delay: 0.9s;
  }
  
  .loader>span:nth-child(5) {
    animation-delay: 1.2s;
  }
  
  .loader>span:nth-child(6) {
    animation-delay: 1.5s
  }
  
  .loader>span:nth-child(7) {
    animation-delay: 1.8s
  }