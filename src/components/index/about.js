import React from "react";
import Heading from "../../components/heading";
import {Radar, Pie, Doughnut} from "react-chartjs-2";
import styles from "../../styles/about.module.scss";

const chartAndreas = {
  data: {
    labels: ["Webbutvecklare", "Hårdrockare", "Livsnjutare"],
    datasets: [
      {
        fill: true,
        textColor: '#fff',
        backgroundColor: ["rgba(255,0,255,0.2)","rgba(255,0,255,0.4)","rgba(255,0,255,0.6)"],
        borderColor: "rgba(255,0,255,1)",
        borderWidth: 1,
        data: [33.33, 33.33, 33.33]
      }
    ]
  },
  options: {
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Andreas',
      fontColor: '#fff'
    },
    legend: { display: true },
  }
}

const chartHobbies = {
  data: {
    labels: ["Festivaler", "Pyssel", "Resor", "Spelningar", "TV-spel", "Teknik", "Webbutveckling"],
    datasets: [
      {
        label: "Intressen",
        fill: true,
        textColor: '#fff',
        backgroundColor: "rgba(255,0,255,0.1)",
        borderColor: "rgba(255,0,255,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255,0,255,1)",
        borderWidth: 1,
        data: [15, 10, 20, 15, 20, 10, 20]
      }
    ]
  },
  options: {
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Intressen',
      fontColor: '#fff'
    },
    legend: { display: false },
    scale: {
      ticks: {
        display: false,
        min: 0
      },
      pointLabels: {
        fontColor: '#fff'
      }
    }
  }
}

const chartWebHobbies = {
  data: {
    labels: ["HTML", "CSS", "JavaScript"],
    datasets: [
      {
        fill: true,
        textColor: '#fff',
        backgroundColor: ["rgba(255,0,255,0.2)","rgba(255,0,255,0.4)","rgba(255,0,255,0.6)"],
        borderColor: "rgba(255,0,255,1)",
        borderWidth: 1,
        data: [20, 30, 50]
      }
    ]
  },
  options: {
    maintainAspectRatio: true,
    title: {
      display: true,
      text: 'Webbutveckling',
      fontColor: '#fff'
    },
    legend: { display: true },
  }
}

export default() => (
  <div className={styles.content}>
    <Heading>Om mig</Heading>
    <div className={styles.charts}>
      <div>
        <Pie data={chartAndreas.data} options={chartAndreas.options} />
      </div>
      <div>
        <Radar data={chartHobbies.data} options={chartHobbies.options} />
      </div>
      <div>
        <Doughnut data={chartWebHobbies.data} options={chartWebHobbies.options} />
      </div>
    </div>
  </div>
);