/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FILM_DATA } from './constants';
import Section from './components/Section';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-sans font-medium tracking-tighter mb-6">Scaling Excellence</h1>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg">A deep dive into the infrastructure, people, and culture behind Aeroman's Hangar 7.</p>
      </header>
      
      <main>
        {FILM_DATA.map((item, index) => (
          <Section
            key={index}
            index={index}
            plotPoint={item.plotPoint}
            title={item.title}
            lengthSeconds={item.lengthSeconds}
            description={item.description}
            suggestedVO={item.suggestedVO}
            whatWeSee={item.whatWeSee}
            accomplishment={item.accomplishment}
            icon={item.icon}
          />
        ))}
      </main>

      <footer className="py-12 text-center text-zinc-400 text-sm">
        <p>&copy; 2026 Scaling Excellence. All rights reserved.</p>
        <p className="mt-2 font-medium text-zinc-500">A Primal Films Presentation</p>
      </footer>
    </div>
  );
}
