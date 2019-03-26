var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        datasets: [{
                label: "Signups",
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                data: [320, 200, 220, 350, 400, 380, 340, 330, 300, 430],
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [400, 180, 280, 260, 420, 120, 200, 500, 310, 440],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [59, 49, 68, 90, 67, 41, 13, 38, 48],
                hidden: true,
            }
        ]
    },
});