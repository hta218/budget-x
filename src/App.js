import React from 'react';
import Header from './components/Header'

function App() {
	return <>
		<Header />
		<div className="App">
			<div class="h-64">
				<div class="p-4 m-4 bg-green-600">
					<h1 class="text-2xl font-bold text-white">Tailwind CSS Demo</h1>
				</div>
				<div class="p-4 m-4 bg-green-300 h-full">
					<h2 class="text-green-900">Have much fun using Tailwind CSS</h2>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">My Tailwind Button</button>
				</div>
			</div>
		</div>
	</>;
}

export default App;
