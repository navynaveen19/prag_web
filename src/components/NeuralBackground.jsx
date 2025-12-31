// Neural Network and Brain Background Animation Component
import './NeuralBackground.css';

function NeuralBackground() {
  return (
    <div className="neural-animations">
      {/* Brain Structure */}
      <svg className="brain-structure" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        {/* Left Hemisphere */}
        <g className="brain-hemisphere left-hemisphere">
          <path className="brain-outline" d="M200,400 Q150,300 180,200 Q200,120 250,150 Q280,170 300,200 Q320,250 310,300 Q305,350 280,380 Q260,400 240,410 Q220,420 200,400 Z" 
            fill="rgba(99, 102, 241, 0.15)" 
            stroke="rgba(99, 102, 241, 0.3)" 
            strokeWidth="2">
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4s" repeatCount="indefinite" />
          </path>
          {/* Brain Folds */}
          <path className="brain-fold" d="M220,250 Q240,220 260,240" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" fill="none">
            <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3s" repeatCount="indefinite" />
          </path>
          <path className="brain-fold" d="M230,320 Q250,300 270,320" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" fill="none">
            <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
          </path>
          <path className="brain-fold" d="M210,360 Q230,340 250,360" stroke="rgba(99, 102, 241, 0.25)" strokeWidth="1.5" fill="none">
            <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3.2s" repeatCount="indefinite" begin="1s" />
          </path>
        </g>
        
        {/* Right Hemisphere */}
        <g className="brain-hemisphere right-hemisphere">
          <path className="brain-outline" d="M1000,400 Q1050,300 1020,200 Q1000,120 950,150 Q920,170 900,200 Q880,250 890,300 Q895,350 920,380 Q940,400 960,410 Q980,420 1000,400 Z" 
            fill="rgba(139, 92, 246, 0.15)" 
            stroke="rgba(139, 92, 246, 0.3)" 
            strokeWidth="2">
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="4.5s" repeatCount="indefinite" begin="0.5s" />
          </path>
          {/* Brain Folds */}
          <path className="brain-fold" d="M980,250 Q960,220 940,240" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1.5" fill="none">
            <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3.2s" repeatCount="indefinite" begin="0.3s" />
          </path>
          <path className="brain-fold" d="M970,320 Q950,300 930,320" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1.5" fill="none">
            <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3.7s" repeatCount="indefinite" begin="0.8s" />
          </path>
          <path className="brain-fold" d="M990,360 Q970,340 950,360" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1.5" fill="none">
            <animate attributeName="stroke-opacity" values="0.15;0.35;0.15" dur="3.4s" repeatCount="indefinite" begin="1.3s" />
          </path>
        </g>
        
        {/* Corpus Callosum (Connection between hemispheres) */}
        <path className="corpus-callosum" d="M580,350 Q600,320 620,350" 
          stroke="rgba(236, 72, 153, 0.3)" 
          strokeWidth="3" 
          fill="none"
          strokeLinecap="round">
          <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite" />
        </path>
      </svg>
      
      {/* Neural Network */}
      <svg className="neural-network" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {/* Left Side Neurons */}
        {/* Neuron 1 - Top Left */}
        <g className="neuron-group" transform="translate(100, 100)">
          <path className="dendrite" d="M0,0 Q-30,-25 -50,-15 T-80,5" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
          </path>
          <path className="dendrite" d="M0,0 Q-25,-35 -15,-55 T5,-85" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite" begin="0.3s" />
          </path>
          <path className="dendrite" d="M0,0 Q30,25 50,15 T80,-5" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.6s" repeatCount="indefinite" begin="0.6s" />
          </path>
          <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#6366f1" opacity="0.9">
            <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
          </circle>
          <line className="axon" x1="0" y1="0" x2="120" y2="40" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2.5" strokeLinecap="round">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
          </line>
          <circle className="synapse" cx="120" cy="40" r="6" fill="#6366f1" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Neuron 2 - Left Middle */}
        <g className="neuron-group" transform="translate(200, 350)">
          <path className="dendrite" d="M0,0 Q-25,-30 -45,-20 T-75,0" stroke="rgba(13, 160, 217, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.9s" repeatCount="indefinite" />
          </path>
          <path className="dendrite" d="M0,0 Q25,30 45,20 T75,0" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="3.1s" repeatCount="indefinite" begin="0.3s" />
          </path>
          <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#0da0d9" opacity="0.9">
            <animate attributeName="r" values="12;18;12" dur="3.1s" repeatCount="indefinite" begin="0.3s" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <line className="axon" x1="0" y1="0" x2="130" y2="50" stroke="rgba(13, 160, 217, 0.5)" strokeWidth="2.5" strokeLinecap="round">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.3s" repeatCount="indefinite" begin="0.6s" />
          </line>
          <circle className="synapse" cx="130" cy="50" r="6" fill="#0da0d9" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Neuron 3 - Left Bottom */}
        <g className="neuron-group" transform="translate(150, 600)">
          <path className="dendrite" d="M0,0 Q-30,-25 -50,-15 T-80,5" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
          </path>
          <path className="dendrite" d="M0,0 Q30,25 50,15 T80,-5" stroke="rgba(13, 160, 217, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.7s" repeatCount="indefinite" begin="0.4s" />
          </path>
          <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#10b981" opacity="0.9">
            <animate attributeName="r" values="12;18;12" dur="2.9s" repeatCount="indefinite" begin="0.4s" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <line className="axon" x1="0" y1="0" x2="110" y2="70" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="2.5" strokeLinecap="round">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" begin="0.7s" />
          </line>
          <circle className="synapse" cx="110" cy="70" r="6" fill="#10b981" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.9s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Middle Neurons */}
        {/* Neuron 4 - Middle Top */}
        <g className="neuron-group" transform="translate(500, 120)">
          <path className="dendrite" d="M0,0 Q-35,-20 -55,-10 T-85,10" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.7s" repeatCount="indefinite" />
          </path>
          <path className="dendrite" d="M0,0 Q-20,35 -10,55 T10,85" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.9s" repeatCount="indefinite" begin="0.4s" />
          </path>
          <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.9">
            <animate attributeName="r" values="12;18;12" dur="3.2s" repeatCount="indefinite" begin="0.2s" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.3s" repeatCount="indefinite" />
          </circle>
          <line className="axon" x1="0" y1="0" x2="140" y2="60" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2.5" strokeLinecap="round">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.2s" repeatCount="indefinite" begin="0.5s" />
          </line>
          <circle className="synapse" cx="140" cy="60" r="6" fill="#8b5cf6" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.7s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Neuron 5 - Center */}
        <g className="neuron-group" transform="translate(600, 400)">
          <path className="dendrite" d="M0,0 Q-30,-30 -50,-20 T-80,0" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.6s" repeatCount="indefinite" />
          </path>
          <path className="dendrite" d="M0,0 Q30,30 50,20 T80,0" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite" begin="0.5s" />
          </path>
          <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#ec4899" opacity="0.9">
            <animate attributeName="r" values="12;18;12" dur="2.8s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.1s" repeatCount="indefinite" />
          </circle>
          <line className="axon" x1="0" y1="0" x2="100" y2="80" stroke="rgba(236, 72, 153, 0.5)" strokeWidth="2.5" strokeLinecap="round">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.4s" repeatCount="indefinite" begin="0.8s" />
          </line>
          <circle className="synapse" cx="100" cy="80" r="6" fill="#ec4899" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Neuron 6 - Middle Bottom */}
        <g className="neuron-group" transform="translate(550, 650)">
          <path className="dendrite" d="M0,0 Q-30,-25 -50,-15 T-80,5" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
          </path>
          <path className="dendrite" d="M0,0 Q30,25 50,15 T80,-5" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.7s" repeatCount="indefinite" begin="0.4s" />
          </path>
          <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#6366f1" opacity="0.9">
            <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" begin="0.6s" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <line className="axon" x1="0" y1="0" x2="90" y2="50" stroke="rgba(99, 102, 241, 0.5)" strokeWidth="2.5" strokeLinecap="round">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite" begin="0.9s" />
          </line>
          <circle className="synapse" cx="90" cy="50" r="6" fill="#6366f1" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Right Side Neurons */}
        {/* Neuron 7 - Right Top */}
        <g className="neuron-group" transform="translate(900, 150)">
          <path className="dendrite" d="M0,0 Q-30,-30 -50,-20 T-80,0" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.6s" repeatCount="indefinite" />
          </path>
          <path className="dendrite" d="M0,0 Q30,30 50,20 T80,0" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite" begin="0.5s" />
          </path>
          <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#ec4899" opacity="0.9">
            <animate attributeName="r" values="12;18;12" dur="2.8s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.1s" repeatCount="indefinite" />
          </circle>
          <line className="axon" x1="0" y1="0" x2="100" y2="80" stroke="rgba(236, 72, 153, 0.5)" strokeWidth="2.5" strokeLinecap="round">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.4s" repeatCount="indefinite" begin="0.8s" />
          </line>
          <circle className="synapse" cx="100" cy="80" r="6" fill="#ec4899" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Neuron 8 - Right Middle */}
        <g className="neuron-group" transform="translate(1000, 350)">
          <path className="dendrite" d="M0,0 Q-20,-25 -40,-15 T-70,5" stroke="rgba(236, 72, 153, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.4s" repeatCount="indefinite" />
          </path>
          <path className="dendrite" d="M0,0 Q20,25 40,15 T70,-5" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.6s" repeatCount="indefinite" begin="0.3s" />
          </path>
          <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#8b5cf6" opacity="0.9">
            <animate attributeName="r" values="12;18;12" dur="3s" repeatCount="indefinite" begin="0.6s" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <line className="axon" x1="0" y1="0" x2="90" y2="50" stroke="rgba(139, 92, 246, 0.5)" strokeWidth="2.5" strokeLinecap="round">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.6s" repeatCount="indefinite" begin="0.9s" />
          </line>
          <circle className="synapse" cx="90" cy="50" r="6" fill="#8b5cf6" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Neuron 9 - Right Bottom */}
        <g className="neuron-group" transform="translate(950, 600)">
          <path className="dendrite" d="M0,0 Q-30,-25 -50,-15 T-80,5" stroke="rgba(16, 185, 129, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
          </path>
          <path className="dendrite" d="M0,0 Q30,25 50,15 T80,-5" stroke="rgba(13, 160, 217, 0.4)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.7s" repeatCount="indefinite" begin="0.4s" />
          </path>
          <circle className="neuron-soma" cx="0" cy="0" r="14" fill="#10b981" opacity="0.9">
            <animate attributeName="r" values="12;18;12" dur="2.9s" repeatCount="indefinite" begin="0.4s" />
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2.2s" repeatCount="indefinite" />
          </circle>
          <line className="axon" x1="0" y1="0" x2="110" y2="70" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="2.5" strokeLinecap="round">
            <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" begin="0.7s" />
          </line>
          <circle className="synapse" cx="110" cy="70" r="6" fill="#10b981" opacity="0.8">
            <animate attributeName="opacity" values="0.5;1;0.5" dur="1.9s" repeatCount="indefinite" />
          </circle>
        </g>
        
        {/* Synaptic Connections - Distributed across all areas */}
        <line className="synaptic-connection" x1="220" y1="140" x2="500" y2="120" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
          <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite" />
        </line>
        <line className="synaptic-connection" x1="330" y1="400" x2="600" y2="400" stroke="rgba(13, 160, 217, 0.3)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2.1s" repeatCount="indefinite" begin="0.3s" />
          <animate attributeName="stroke-dashoffset" values="0;10" dur="2.1s" repeatCount="indefinite" begin="0.3s" />
        </line>
        <line className="synaptic-connection" x1="640" y1="480" x2="900" y2="230" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2.3s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="stroke-dashoffset" values="0;10" dur="2.3s" repeatCount="indefinite" begin="0.5s" />
        </line>
        <line className="synaptic-connection" x1="660" y1="700" x2="950" y2="600" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2.4s" repeatCount="indefinite" begin="0.7s" />
          <animate attributeName="stroke-dashoffset" values="0;10" dur="2.4s" repeatCount="indefinite" begin="0.7s" />
        </line>
        <line className="synaptic-connection" x1="500" y1="180" x2="600" y2="400" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2.2s" repeatCount="indefinite" begin="0.4s" />
          <animate attributeName="stroke-dashoffset" values="0;10" dur="2.2s" repeatCount="indefinite" begin="0.4s" />
        </line>
        <line className="synaptic-connection" x1="1000" y1="400" x2="950" y2="600" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" strokeDasharray="5,5">
          <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
          <animate attributeName="stroke-dashoffset" values="0;10" dur="2.5s" repeatCount="indefinite" begin="0.6s" />
        </line>
      </svg>
    </div>
  );
}

export default NeuralBackground;

