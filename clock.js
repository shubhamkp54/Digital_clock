let a;
    let date;
    let time;
    const Option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    setInterval(() => {

      a = new Date();

      date = a.toLocaleDateString(undefined, Option);
      time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
      document.getElementById('time').innerHTML = time +  "                   "+" on" + "   " + date;

    }, 1000);