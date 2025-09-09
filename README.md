# Weather app

Weather app built with React + Vite.

## Get started

1. Install dependencies: `npm install`

2. Start the server: `npm run dev`

3. Open your favourite browser and go to :`http://localhost:5173/`

## Challenges - assumptions & tradeoffs

1. I was gratful for how well documeted open-meteo's api is, however I mistook how errors were handled by the open-meteo.com/ api which cost time to correct.

2. Other details I overlooked included how the weather symbols were handled which also caused extra time.

3. Some of the architecture suffered, for example I would have preferred to keep common types in its own types file rather than in app.ts.

4. I ran out of time to create custom hooks, eg for data fetching.

5. I ran out of time to conduct any testing, even lighthouse.

## Approximate time took, and reflections on how I would improve next time.

1. I took just over 4 hours, closer to 4.5 hours. If I had stopped at 4 hours I would not have been able to finsh the temperature unit feature (it would not have been saved to local storage), or any of the loading/ error handling states.

2. I spend time planning the project, familiarising with the api and sketching the markup. When I initiated the project I implemted all skeleton HTML which was a mistake as I had to adjust some later taking valuable time. In retrospect I would only have implemeted the header and form function, and taken the other features as they came, following my sketch.

3. I regret not having time to do the caching, as this was a feature I was very excited to implement. I have used caching libraries before, but have never implemented manual caching and was excited by the challenge. I will certainly complete it in my own time.

4. I would implement a custom hook for data fetching next time to ensure the logic testing was simpler.

5. I would test accessibility as I was building each feature.

6. I would change the architecture from the beginnning, eg having a dedicated types file, and each component would have its own folder with its specific types, styling etc.

7. A cherry on top would be to host the weather icons in this repository.

## Notes

Thank you to: https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c#file-descriptions-json for the weather icon images and description, which saved me so much time.
