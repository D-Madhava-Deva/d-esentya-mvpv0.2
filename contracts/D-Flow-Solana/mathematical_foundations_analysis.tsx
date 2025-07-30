import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Network, Layers, ArrowRight, Circle } from 'lucide-react';

const MathematicalFoundationsAnalysis = () => {
  const [activeSection, setActiveSection] = useState('comparison');
  const [selectedStructure, setSelectedStructure] = useState(null);

  const latticeData = {
    name: "Teoria dos Reticulados (Lattice Theory)",
    definition: "Um conjunto parcialmente ordenado onde cada par de elementos tem um supremo único (least upper bound) e um ínfimo único (greatest lower bound)",
    properties: [
      "Ordem parcial rigorosa (≤)",
      "Operações join (∨) e meet (∧)",
      "Leis associativas, comutativas e de absorção",
      "Hierarquia estrita de níveis"
    ],
    advantages: [
      "Perfeita para modelar hierarquias Kosha/Loka",
      "Matemática consolidada e rigorosa",
      "Permite cálculos precisos de 'distância ontológica'",
      "Naturalmente mapeia densidade (0) → sutileza (1)"
    ],
    limitations: [
      "Estrutura mais rígida",
      "Menos flexível para transições dinâmicas",
      "Não captura bem a 'escolha consciente' do Tier"
    ]
  };

  const categoryData = {
    name: "Teoria das Categorias",
    definition: "Estrutura com objetos e morfismos (arrows) entre eles, onde morfismos podem ser compostos e preservam estrutura",
    properties: [
      "Objetos (Koshas/Lokas)",
      "Morfismos (transformações/transições)",
      "Composição associativa",
      "Identidades para cada objeto"
    ],
    advantages: [
      "Captura perfeitamente transições Chakra→Loka",
      "Morfismos modelam 'escolha consciente'",
      "Permite múltiplos caminhos entre níveis",
      "Flexível para sistemas dinâmicos"
    ],
    limitations: [
      "Mais abstrata e complexa",
      "Requer definição cuidadosa dos morfismos",
      "Menos intuitiva para hierarquias simples"
    ]
  };

  const koshaLevels = [
    { name: "Annamaya", tier: 0.03, loka: "Bhūloka", density: "Mais densa" },
    { name: "Pranamaya", tier: 0.07, loka: "Bhūvarloka", density: "Densa" },
    { name: "Manomaya", tier: 0.12, loka: "Svarloka", density: "Média-densa" },
    { name: "Vijñānamaya", tier: 0.25, loka: "Maharloka", density: "Média" },
    { name: "Ānandamaya", tier: 0.50, loka: "Janaloka", density: "Sutil" },
    { name: "Consciousness", tier: 0.75, loka: "Tapoloka", density: "Muito sutil" },
    { name: "Pure Being", tier: 1.0, loka: "Satyaloka", density: "Mais sutil" }
  ];

  const LatticeVisualization = () => (
    <div className="bg-blue-50 p-6 rounded-lg">
      <h3 className="font-bold text-lg mb-4 flex items-center">
        <Layers className="mr-2" size={20} />
        Estrutura de Reticulado (Lattice)
      </h3>
      <div className="space-y-3">
        {koshaLevels.slice().reverse().map((level, idx) => (
          <div key={idx} className="flex items-center">
            <div className="w-8 h-8 border-2 border-blue-600 rounded flex items-center justify-center text-sm font-bold">
              {(level.tier * 100).toFixed(0)}
            </div>
            <div className="ml-4 flex-1">
              <div className="font-semibold">{level.name}</div>
              <div className="text-sm text-gray-600">{level.loka} | {level.density}</div>
            </div>
            {idx < koshaLevels.length - 1 && (
              <div className="text-blue-600">≤</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-blue-100 rounded">
        <strong>Propriedades matemáticas:</strong>
        <ul className="text-sm mt-2 space-y-1">
          <li>• Ordem parcial: Annamaya ≤ Pranamaya ≤ ... ≤ Pure Being</li>
          <li>• Join: max(a,b) = nível mais sutil entre dois</li>
          <li>• Meet: min(a,b) = nível mais denso entre dois</li>
        </ul>
      </div>
    </div>
  );

  const CategoryVisualization = () => (
    <div className="bg-green-50 p-6 rounded-lg">
      <h3 className="font-bold text-lg mb-4 flex items-center">
        <Network className="mr-2" size={20} />
        Estrutura Categórica
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {koshaLevels.slice(0, 6).map((level, idx) => (
          <div key={idx} className="text-center">
            <Circle className="mx-auto mb-2 text-green-600" size={24} />
            <div className="text-sm font-semibold">{level.name}</div>
            <div className="text-xs text-gray-600">{level.loka}</div>
            {idx < 5 && (
              <ArrowRight className="mx-auto mt-2 text-green-600" size={16} />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-green-100 rounded">
        <strong>Propriedades matemáticas:</strong>
        <ul className="text-sm mt-2 space-y-1">
          <li>• Objetos: Cada Kosha/Loka é um objeto</li>
          <li>• Morfismos: Transformações conscientes entre níveis</li>
          <li>• Composição: Sequências de elevação vibracional</li>
          <li>• Tier como parâmetro do morfismo (0→1)</li>
        </ul>
      </div>
    </div>
  );

  const ComparisonTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-3 text-left">Aspecto</th>
            <th className="border border-gray-300 p-3 text-left">Lattice Theory</th>
            <th className="border border-gray-300 p-3 text-left">Category Theory</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Fundamento Lógico</td>
            <td className="border border-gray-300 p-3">✅ Extremamente rigoroso</td>
            <td className="border border-gray-300 p-3">✅ Altamente rigoroso</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Modelagem Koshas/Lokas</td>
            <td className="border border-gray-300 p-3">🎯 Perfeito para hierarquias</td>
            <td className="border border-gray-300 p-3">⚡ Excelente para transformações</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Sistema Tier (0-1)</td>
            <td className="border border-gray-300 p-3">📊 Como medida de posição</td>
            <td className="border border-gray-300 p-3">🎛️ Como parâmetro de morfismo</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Escolha Consciente</td>
            <td className="border border-gray-300 p-3">⚠️ Limitado</td>
            <td className="border border-gray-300 p-3">✨ Naturalmente capturado</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-3 font-semibold">Complexidade</td>
            <td className="border border-gray-300 p-3">🟢 Simples e intuitivo</td>
            <td className="border border-gray-300 p-3">🟡 Mais abstrato</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Fundamentos Matemáticos para Sistemas Ontológicos
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Análise rigorosa de duas estruturas matemáticas consolidadas para modelar 
          as filosofias dos Sutras: Koshas, Lokas e o sistema de escolha consciente (Tier).
        </p>
      </div>

      <div className="flex space-x-4 mb-6">
        {['comparison', 'lattice', 'category', 'recommendation'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeSection === section
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {section === 'comparison' && 'Comparação'}
            {section === 'lattice' && 'Lattice Theory'}
            {section === 'category' && 'Category Theory'}
            {section === 'recommendation' && 'Recomendação'}
          </button>
        ))}
      </div>

      {activeSection === 'comparison' && (
        <div className="space-y-6">
          <ComparisonTable />
          <div className="grid md:grid-cols-2 gap-6">
            <LatticeVisualization />
            <CategoryVisualization />
          </div>
        </div>
      )}

      {activeSection === 'lattice' && (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{latticeData.name}</h2>
            <p className="text-gray-700 mb-4">{latticeData.definition}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Vantagens para seu sistema:</h3>
                <ul className="space-y-2">
                  {latticeData.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Limitações:</h3>
                <ul className="space-y-2">
                  {latticeData.limitations.map((lim, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-600 mr-2">⚠</span>
                      {lim}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <LatticeVisualization />
        </div>
      )}

      {activeSection === 'category' && (
        <div className="space-y-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{categoryData.name}</h2>
            <p className="text-gray-700 mb-4">{categoryData.definition}</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Vantagens para seu sistema:</h3>
                <ul className="space-y-2">
                  {categoryData.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      {adv}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Limitações:</h3>
                <ul className="space-y-2">
                  {categoryData.limitations.map((lim, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-600 mr-2">⚠</span>
                      {lim}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <CategoryVisualization />
        </div>
      )}

      {activeSection === 'recommendation' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">🎯 Recomendação Matemática</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-3">
                  Estrutura Híbrida: Lattice + Category
                </h3>
                <p className="text-gray-700 mb-4">
                  A solução matematicamente mais rigorosa combina ambas as estruturas:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">1.</span>
                    <span><strong>Base Lattice:</strong> Para modelar a hierarquia ontológica fixa Koshas/Lokas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-2">2.</span>
                    <span><strong>Morfismos Categóricos:</strong> Para modelar as transições conscientes (Tier)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">3.</span>
                    <span><strong>Parâmetro Tier:</strong> Como peso/intensidade dos morfismos (0→1)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">Formalização Matemática:</h3>
                <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                  <div>• L = (K, ≤) onde K = {Koshas/Lokas} com ordem parcial ≤</div>
                  <div>• C = categoria com objetos K e morfismos f: k₁ → k₂</div>
                  <div>• Tier: t ∈ [0,1] como parâmetro de cada morfismo</div>
                  <div>• Restrição: morfismos só existem se k₁ ≤ k₂ no lattice</div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <strong>Resultado:</strong> Sistema matematicamente rigoroso que preserva tanto a 
                estrutura ontológica dos Sutras quanto a flexibilidade da escolha consciente.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MathematicalFoundationsAnalysis;