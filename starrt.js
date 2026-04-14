fetch("https://raw.githubusercontent.com/letrol21/dancing-bunny/refs/heads/main/tabsystem.html")
    .then(response => response.text())
    .then(text => { 
        const newWin = window.open("about:blank", "_blank");
        if (newWin) { 
            newWin.document.open(); 
            newWin.document.write(text); 
            newWin.document.close(); 
        } 
    });
