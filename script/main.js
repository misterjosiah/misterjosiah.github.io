async function fetchPoem() {
    try {
        const response = await fetch('https://poetrydb.org/linecount,random/4;1/lines.json');
        const data = await response.json();
        
        if (data.length > 0) {
            const poemLines = data[0].lines;
            const poemText = poemLines.join('<br>'); 
            
            document.getElementById('poem-subtext').innerHTML = poemText;
        } else {
            document.getElementById('poem-subtext').innerHTML = 'No poem found.';
        }
    } catch (error) {
        console.error('Error fetching the poem:', error);
        document.getElementById('poem-subtext').innerHTML = 'Failed to load poem.';
    }
}

window.onload = fetchPoem;
