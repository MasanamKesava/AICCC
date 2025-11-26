import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FileCheck,
  Users,
  Target,
  Award,
  Building2,
  IndianRupee,
  BarChart3,
  Filter as FilterIcon,
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import Layout from "@/components/Layout";

/* ---------- RAW DATA (your JSON) ---------- */
const rawProjects = [
  {
    "Project Number": "WIN/0010/24-25",
    "Project Name": "Zone - 1A",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "BSR",
    PMC: "Nippon Koei",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Mukesh Kumar Kalluru",
    "Deputy Executive Engineer": "Perikala Venkateswarlu",
    "Executive Engineer": "Meesala Ravi Kumar",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 350.19 Crore",
    "Physical Progress (Plan)": "0.02%",
    "Work Completed": "2.83%",
    "Variance (%)": "2.81%",
    Status: "On_track",
    "Work Cleared": "2.96%",
  },
  {
    "Project Number": "WIN/0011/24-25",
    "Project Name": "Zone - 1B",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "BSR",
    PMC: "Nippon Koei",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Mukesh Kumar Kalluru",
    "Deputy Executive Engineer": "Perikala Venkateswarlu",
    "Executive Engineer": "Meesala Ravi Kumar",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 468.37 Crore",
    "Physical Progress (Plan)": "14.61%",
    "Work Completed": "2.51%",
    "Variance (%)": "-12.09%",
    Status: "Delay",
    "Work Cleared": "2.6%",
  },
  {
    "Project Number": "WIN/0014/24-25",
    "Project Name": "Zone - 2A",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "BSR",
    PMC: "Aarvee",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Pulaguru Hanumantha Reddy",
    "Deputy Executive Engineer": "Perikala Venkateswarlu",
    "Executive Engineer": "Meesala Ravi Kumar",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 418.63 Crore",
    "Physical Progress (Plan)": "2.06%",
    "Work Completed": "3.6%",
    "Variance (%)": "1.55%",
    Status: "On_track",
    "Work Cleared": "3.66%",
  },
  {
    "Project Number": "WIN/0016/24-25",
    "Project Name": "Zone - 2B",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "BSR",
    PMC: "Aarvee",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Pulaguru Hanumantha Reddy",
    "Deputy Executive Engineer": "Perikala Venkateswarlu",
    "Executive Engineer": "Meesala Ravi Kumar",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 432.37 Crore",
    "Physical Progress (Plan)": "6.39%",
    "Work Completed": "3.6%",
    "Variance (%)": "-2.78%",
    Status: "Delay",
    "Work Cleared": "3.65%",
  },
  {
    "Project Number": "WIN/0022/24-25",
    "Project Name": "Zone - 5A",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "BSR",
    PMC: "Tractebel",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Chettipogu Ravi Kumar",
    "Deputy Executive Engineer": "Nallapu Srikanth",
    "Executive Engineer": "Chalamalasetti Naga Venkat",
    "Superintending Engineer": "Koripella Srinivasa Rao",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 780.57 Crore",
    "Physical Progress (Plan)": "29.18%",
    "Work Completed": "2.85%",
    "Variance (%)": "-26.33%",
    Status: "Delay",
    "Work Cleared": "2.96%",
  },
  {
    "Project Number": "WIN/0024/24-25",
    "Project Name": "Zone - 5C",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "BSR",
    PMC: "Tractebel",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Chettipogu Ravi Kumar",
    "Deputy Executive Engineer": "Nallapu Srikanth",
    "Executive Engineer": "Chalamalasetti Naga Venkat",
    "Superintending Engineer": "Koripella Srinivasa Rao",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 605.88 Crore",
    "Physical Progress (Plan)": "29.22%",
    "Work Completed": "3.62%",
    "Variance (%)": "-25.6%",
    Status: "Delay",
    "Work Cleared": "3.75%",
  },
  {
    "Project Number": "WIN/0025/24-25",
    "Project Name": "Zone - 5D",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "BSR",
    PMC: "Tractebel",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Chettipogu Ravi Kumar",
    "Deputy Executive Engineer": "Nallapu Srikanth",
    "Executive Engineer": "Chalamalasetti Naga Venkat",
    "Superintending Engineer": "Koripella Srinivasa Rao",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 470.42 Crore",
    "Physical Progress (Plan)": "29.18%",
    "Work Completed": "3.35%",
    "Variance (%)": "-25.82%",
    Status: "Delay",
    "Work Cleared": "3.41%",
  },
  {
    "Project Number": "WIN/0009/24-25",
    "Project Name": "Zone - 3B",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "MEIL",
    PMC: "Tractebel",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Katakam Hareesh Kumar",
    "Deputy Executive Engineer": "Perikala Venkateswarlu",
    "Executive Engineer": "Perikala Venkateswara Rao",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 313.68 Crore",
    "Physical Progress (Plan)": "9.17%",
    "Work Completed": "3.3%",
    "Variance (%)": "-5.87%",
    Status: "Delay",
    "Work Cleared": "3.49%",
  },
  {
    "Project Number": "WIN/0021/24-25",
    "Project Name": "Zone - 6",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "MEIL",
    PMC: "Aarvee",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Gudla L D V Santhosh",
    "Deputy Executive Engineer": "M Ravi Kumar",
    "Executive Engineer": "Perikala Venkateswara Rao",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 394.01 Crore",
    "Physical Progress (Plan)": "47.82%",
    "Work Completed": "2.6%",
    "Variance (%)": "-45.22%",
    Status: "Delay",
    "Work Cleared": "2.6%",
  },
  {
    "Project Number": "WIN/0013/24-25",
    "Project Name": "Zone - 9",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "MEIL",
    PMC: "Tractebel",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer": "PR Ashok Babu",
    "Deputy Executive Engineer": "Perikala Venkateswarlu",
    "Executive Engineer": "Chalamalasetti Naga Venkat",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 2077.7 Crore",
    "Physical Progress (Plan)": "5.37%",
    "Work Completed": "1.72%",
    "Variance (%)": "-3.65%",
    Status: "Delay",
    "Work Cleared": "1.74%",
  },
  {
    "Project Number": "WIN/0007/24-25",
    "Project Name": "Zone - 9A",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "MEIL",
    PMC: "Tractebel",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Nallapu Srikanth",
    "Deputy Executive Engineer": "Perikala Venkateswarlu",
    "Executive Engineer": "Perikala Venkateswara Rao",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 1287.19 Crore",
    "Physical Progress (Plan)": "1.96%",
    "Work Completed": "2.99%",
    "Variance (%)": "1.04%",
    Status: "On_track",
    "Work Cleared": "3.1%",
  },
  {
    "Project Number": "WIN/0020/24-25",
    "Project Name": "Zone - 12A",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "MEIL",
    PMC: "Nippon Koei",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Namburu Rajasekhar",
    "Deputy Executive Engineer": "M Ravi Kumar",
    "Executive Engineer": "Manepalli B D N V Prasad",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 1535.61 Crore",
    "Physical Progress (Plan)": "6.67%",
    "Work Completed": "1.96%",
    "Variance (%)": "-4.7%",
    Status: "Delay",
    "Work Cleared": "1.98%",
  },
  {
    "Project Number": "WIN/0008/24-25",
    "Project Name": "Zone - 3A",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "RVR",
    PMC: "Tractebel",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Katakam Hareesh Kumar",
    "Deputy Executive Engineer": "Perikala Venkateswarlu",
    "Executive Engineer": "Meesala Ravi Kumar",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 393.32 Crore",
    "Physical Progress (Plan)": "6.95%",
    "Work Completed": "1.53%",
    "Variance (%)": "-5.41%",
    Status: "Delay",
    "Work Cleared": "1.54%",
  },
  {
    "Project Number": "WIN/0018/24-25",
    "Project Name": "Zone - 4",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "RVR",
    PMC: "Aarvee",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Chettipogu Ravi Kumar",
    "Deputy Executive Engineer": "M Ravi Kumar",
    "Executive Engineer": "Perikala Venkateswara Rao",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 844.11 Crore",
    "Physical Progress (Plan)": "18.85%",
    "Work Completed": "1.17%",
    "Variance (%)": "-17.69%",
    Status: "Delay",
    "Work Cleared": "1.18%",
  },
  {
    "Project Number": "WIN/0023/24-25",
    "Project Name": "Zone - 5B",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "RVR",
    PMC: "Tractebel",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Korukonda Sri Harsha",
    "Deputy Executive Engineer": "M Ravi Kumar",
    "Executive Engineer": "Meesala Ravi Kumar",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 483.37 Crore",
    "Physical Progress (Plan)": "38.56%",
    "Work Completed": "1.4%",
    "Variance (%)": "-37.16%",
    Status: "Delay",
    "Work Cleared": "1.41%",
  },
  {
    "Project Number": "WIN/0026/24-25",
    "Project Name": "Zone - 10",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "RVR",
    PMC: "Aarvee",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Gudla L D V Santhosh",
    "Deputy Executive Engineer": "M Ravi Kumar",
    "Executive Engineer": "Chalamalasetti Naga Venkat",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 1092.9 Crore",
    "Physical Progress (Plan)": "10.7%",
    "Work Completed": "0.98%",
    "Variance (%)": "-9.72%",
    Status: "Delay",
    "Work Cleared": "0.99%",
  },
  {
    "Project Number": "WIN/0012/24-25",
    "Project Name": "Zone - 7",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "L&T",
    PMC: "Nippon Koei",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Undavalli Gopi",
    "Deputy Executive Engineer": "Perikala Venkateswarlu",
    "Executive Engineer": "Chalamalasetti Naga Venkat",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "24-04-2025",
    "End Date": "23-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 809.89 Crore",
    "Physical Progress (Plan)": "2.61%",
    "Work Completed": "1.85%",
    "Variance (%)": "-0.76%",
    Status: "Delay",
    "Work Cleared": "1.89%",
  },
  {
    "Project Number": "WIN/0019/24-25",
    "Project Name": "Zone - 12",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "NCC",
    PMC: "Nippon Koei",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Chettipogu Ravi Kumar",
    "Deputy Executive Engineer": "M Ravi Kumar",
    "Executive Engineer": "Manepalli B D N V Prasad",
    "Superintending Engineer": "Renati Hanumantha Reddy",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2028",
    "Cost (Rs. In Cr.)": "Rs. 2129.6 Crore",
    "Physical Progress (Plan)": "5.36%",
    "Work Completed": "0.43%",
    "Variance (%)": "-4.93%",
    Status: "Delay",
    "Work Cleared": "0.57%",
  },
  {
    "Project Number": "WIN/0072/25-26",
    "Project Name": "E6 Road",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "RVR",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Bandaru Katama Raju",
    "Deputy Executive Engineer": "Eraga Sreenivasulu",
    "Executive Engineer": "Battula Sridhar",
    "Superintending Engineer": "Narasimha Murthy B",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 337.29 Crore",
    "Physical Progress (Plan)": "13.84%",
    "Work Completed": "1.9%",
    "Variance (%)": "-11.94%",
    Status: "Delay",
    "Work Cleared": "1.93%",
  },
  {
    "Project Number": "WIN/0094/25-26",
    "Project Name": "E2 Road",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "BSR",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Bandaru Katama Raju",
    "Deputy Executive Engineer": "Eraga Sreenivasulu",
    "Executive Engineer": "Battula Sridhar",
    "Superintending Engineer": "Narasimha Murthy B",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 157.47 Crore",
    "Physical Progress (Plan)": "26.02%",
    "Work Completed": "1%",
    "Variance (%)": "-25.02%",
    Status: "Delay",
    "Work Cleared": "1.1%",
  },
  {
    "Project Number": "WIN/0061/25-26",
    "Project Name": "Flood Works - KV, PV, Sakhamuru Reservoir",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "MVR",
    PMC: "TYPSA",
    Division: "Flood Mitigation",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Kalluri Basaveswara Rao",
    "Superintending Engineer": "",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "26-04-2025",
    "End Date": "25-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 480.65 Crore",
    "Physical Progress (Plan)": "19.25%",
    "Work Completed": "19.45%",
    "Variance (%)": "0.2%",
    Status: "On_track",
    "Work Cleared": "19.53%",
  },
  {
    "Project Number": "WIN/0062/25-26",
    "Project Name": "Flood Works - Gravity Canal, Krishnayapalem Reservoir",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "MVR",
    PMC: "TYPSA",
    Division: "Flood Mitigation",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Kalluri Basaveswara Rao",
    "Superintending Engineer": "",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "26-04-2025",
    "End Date": "25-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 315.4 Crore",
    "Physical Progress (Plan)": "25.4%",
    "Work Completed": "27.77%",
    "Variance (%)": "2.37%",
    Status: "On_track",
    "Work Cleared": "28.3%",
  },
  {
    "Project Number": "WIN/0077/25-26",
    "Project Name": "Flood Works - Neerukonda Reservoir",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "NCC",
    PMC: "TYPSA",
    Division: "Flood Mitigation",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Kalluri Basaveswara Rao",
    "Superintending Engineer": "",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "06-05-2025",
    "End Date": "04-06-2027",
    "Cost (Rs. In Cr.)": "Rs. 487.41 Crore",
    "Physical Progress (Plan)": "24.01%",
    "Work Completed": "2.53%",
    "Variance (%)": "-21.48%",
    Status: "Delay",
    "Work Cleared": "2.53%",
  },
  {
    "Project Number": "WIN/0031/24-25",
    "Project Name": "Happy Nest",
    HOD: "APCRDA",
    "Funding Agency": "HUDCO",
    Contractor: "NCC",
    PMC: "Feedback",
    Division: "H&B Buildings",
    "Assistant Engineer / Assistant Executive Engineer":
      "Guttameda Vinod Kumar, Galipothu Pavan Kumar, Kasukurthi Subba Rao",
    "Deputy Executive Engineer": "K Rohith Kumar",
    "Executive Engineer": "Marreddy Yajurved Reddy",
    "Superintending Engineer": "Bitra Srinivasa Rao",
    "Chief Engineer": "Pothukuchi Satyanarayana",
    "Start Date": "23-04-2025",
    "End Date": "22-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 856.32 Crore",
    "Physical Progress (Plan)": "28.87%",
    "Work Completed": "7.52%",
    "Variance (%)": "-21.35%",
    Status: "Delay",
    "Work Cleared": "7.65%",
  },
  {
    "Project Number": "WIN/0097/25-26",
    "Project Name": "E12 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "BSR",
    PMC: "MaRS",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Bojjanapalli Naga Srikanth",
    "Deputy Executive Engineer": "Akkiraju Chandrasekhar",
    "Executive Engineer": "Tirumalasetty Vykunta Rao",
    "Superintending Engineer": "Konanki Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 255.61 Crore",
    "Physical Progress (Plan)": "13.36%",
    "Work Completed": "2.42%",
    "Variance (%)": "-10.94%",
    Status: "Delay",
    "Work Cleared": "2.59%",
  },
  {
    "Project Number": "WIN/0064/25-26",
    "Project Name": "N18 Road",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "BSR",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Bojjanapalli Naga Srikanth",
    "Deputy Executive Engineer": "Akkiraju Chandrasekhar",
    "Executive Engineer": "Tirumalasetty Vykunta Rao",
    "Superintending Engineer": "Konanki Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 67.7 Crore",
    "Physical Progress (Plan)": "14.85%",
    "Work Completed": "16.15%",
    "Variance (%)": "1.31%",
    Status: "On_track",
    "Work Cleared": "17.13%",
  },
  {
    "Project Number": "WIN/0138/25-26",
    "Project Name": "Tower 3 and 4 - Structure",
    HOD: "APCRDA",
    "Funding Agency": "HUDCO",
    Contractor: "L&T",
    PMC: "Colliers",
    Division: "H&B Offices",
    "Assistant Engineer / Assistant Executive Engineer":
      "Jatavathu V B K Pradeep, VSHG Phanikumar A",
    "Deputy Executive Engineer": "Marreddy Hemambaradhara Reddy",
    "Executive Engineer": "Paidi Vinodh Kumar",
    "Superintending Engineer": "Bitra Srinivasa Rao",
    "Chief Engineer": "Mukkamala Venkateswara Rao",
    "Start Date": "04-08-2025",
    "End Date": "03-08-2027",
    "Cost (Rs. In Cr.)": "Rs. 1303.85 Crore",
    "Physical Progress (Plan)": "2.68%",
    "Work Completed": "0.16%",
    "Variance (%)": "-2.52%",
    Status: "Delay",
    "Work Cleared": "0.19%",
  },
  {
    "Project Number": "WIN/0041/24-25",
    "Project Name": "Tower 1 and 2 - Structure",
    HOD: "APCRDA",
    "Funding Agency": "HUDCO",
    Contractor: "SPCL",
    PMC: "Colliers",
    Division: "H&B Offices",
    "Assistant Engineer / Assistant Executive Engineer":
      "Jatavathu V B K Pradeep, VSHG Phanikumar A",
    "Deputy Executive Engineer": "A.S.S.S.Venkateswara Rao",
    "Executive Engineer": "Manne Venkata Vidya Sagar",
    "Superintending Engineer": "Bitra Srinivasa Rao",
    "Chief Engineer": "Mukkamala Venkateswara Rao",
    "Start Date": "04-08-2025",
    "End Date": "03-08-2027",
    "Cost (Rs. In Cr.)": "Rs. 1487.11 Crore",
    "Physical Progress (Plan)": "2.14%",
    "Work Completed": "0.11%",
    "Variance (%)": "-2.03%",
    Status: "Delay",
    "Work Cleared": "0.12%",
  },
  {
    "Project Number": "WIN/0039/24-25",
    "Project Name": "GAD Tower - Structure",
    HOD: "APCRDA",
    "Funding Agency": "HUDCO",
    Contractor: "NCC",
    PMC: "Colliers",
    Division: "H&B Offices",
    "Assistant Engineer / Assistant Executive Engineer":
      "Jatavathu V B K Pradeep, VSHG Phanikumar A",
    "Deputy Executive Engineer": "A.S.S.S.Venkateswara Rao",
    "Executive Engineer": "Manne Venkata Vidya Sagar",
    "Superintending Engineer": "Bitra Srinivasa Rao",
    "Chief Engineer": "Mukkamala Venkateswara Rao",
    "Start Date": "04-08-2025",
    "End Date": "03-08-2027",
    "Cost (Rs. In Cr.)": "Rs. 882.47 Crore",
    "Physical Progress (Plan)": "3.38%",
    "Work Completed": "0.1%",
    "Variance (%)": "-3.27%",
    Status: "Delay",
    "Work Cleared": "0.13%",
  },
  {
    "Project Number": "WIN/0034/24-25",
    "Project Name": "GOs and Group D employees - External Infra",
    HOD: "APCRDA",
    "Funding Agency": "WB+ADB",
    Contractor: "SPCL",
    PMC: "",
    Division: "H&B Buildings",
    "Assistant Engineer / Assistant Executive Engineer":
      "Guttameda Vinod Kumar, Galipothu Pavan Kumar, Kasukurthi Subba Rao",
    "Deputy Executive Engineer": "Nallapu Srikanth",
    "Executive Engineer": "Paidi Vinodh Kumar",
    "Superintending Engineer": "Maram Rama mohan",
    "Chief Engineer": "Badam Srinivasa Rao",
    "Start Date": "04-08-2025",
    "End Date": "03-02-2027",
    "Cost (Rs. In Cr.)": "Rs. 194.73 Crore",
    "Physical Progress (Plan)": "63.02%",
    "Work Completed": "0.25%",
    "Variance (%)": "-62.77%",
    Status: "Delay",
    "Work Cleared": "0.25%",
  },
  {
    "Project Number": "WIN/0147/25-26",
    "Project Name": "GOs and Group D employees - Housing",
    HOD: "APCRDA",
    "Funding Agency": "WB+ADB",
    Contractor: "SPCL",
    PMC: "Feedback",
    Division: "H&B Buildings",
    "Assistant Engineer / Assistant Executive Engineer":
      "Guttameda Vinod Kumar, Galipothu Pavan Kumar, Kasukurthi Subba Rao",
    "Deputy Executive Engineer": "Nallapu Srikanth",
    "Executive Engineer": "Paidi Vinodh Kumar",
    "Superintending Engineer": "Maram Rama mohan",
    "Chief Engineer": "Badam Srinivasa Rao",
    "Start Date": "14-07-2025",
    "End Date": "13-01-2027",
    "Cost (Rs. In Cr.)": "Rs. 514.41 Crore",
    "Physical Progress (Plan)": "31.51%",
    "Work Completed": "5.45%",
    "Variance (%)": "-26.06%",
    Status: "Delay",
    "Work Cleared": "5.54%",
  },
  {
    "Project Number": "WIN/0146/25-26",
    "Project Name": "NGO (Housing+Ext. Infra) - 9 Towers",
    HOD: "APCRDA",
    "Funding Agency": "WB+ADB",
    Contractor: "L&T",
    PMC: "Tractebel",
    Division: "H&B Buildings",
    "Assistant Engineer / Assistant Executive Engineer":
      "Mohammed Khaja Hussain, Kalla Anuraju",
    "Deputy Executive Engineer": "K Rohith Kumar, Nallam Sandeepa",
    "Executive Engineer": "Marreddy Yajurved Reddy",
    "Superintending Engineer": "Maram Rama mohan",
    "Chief Engineer": "Badam Srinivasa Rao",
    "Start Date": "14-07-2025",
    "End Date": "13-01-2027",
    "Cost (Rs. In Cr.)": "Rs. 506.07 Crore",
    "Physical Progress (Plan)": "31.11%",
    "Work Completed": "2.57%",
    "Variance (%)": "-28.54%",
    Status: "Delay",
    "Work Cleared": "2.93%",
  },
  {
    "Project Number": "WIN/0145/25-26",
    "Project Name": "NGO (Housing+Ext. Infra) - 12 Towers",
    HOD: "APCRDA",
    "Funding Agency": "WB+ADB",
    Contractor: "L&T",
    PMC: "Tractebel",
    Division: "H&B Buildings",
    "Assistant Engineer / Assistant Executive Engineer":
      "Mohammed Khaja Hussain, Javisetty Venkaiah",
    "Deputy Executive Engineer": "K Rohith Kumar, Nallam Sandeepa",
    "Executive Engineer": "Marreddy Yajurved Reddy",
    "Superintending Engineer": "Maram Rama mohan",
    "Chief Engineer": "Badam Srinivasa Rao",
    "Start Date": "14-07-2025",
    "End Date": "13-01-2027",
    "Cost (Rs. In Cr.)": "Rs. 517.1 Crore",
    "Physical Progress (Plan)": "6.05%",
    "Work Completed": "1.42%",
    "Variance (%)": "-4.63%",
    Status: "Delay",
    "Work Cleared": "1.82%",
  },
  {
    "Project Number": "WIN/0102/25-26",
    "Project Name": "N16 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "BSCPL",
    PMC: "MaRS",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Bojjanapalli Naga Srikanth",
    "Deputy Executive Engineer": "Akkiraju Chandrasekhar",
    "Executive Engineer": "Tirumalasetty Vykunta Rao",
    "Superintending Engineer": "Konanki Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 191.92 Crore",
    "Physical Progress (Plan)": "29.14%",
    "Work Completed": "0.52%",
    "Variance (%)": "-28.63%",
    Status: "Delay",
    "Work Cleared": "0.57%",
  },
  {
    "Project Number": "WIN/0082/25-26",
    "Project Name": "E11 Road",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "MEIL",
    PMC: "LASA",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Ashok Pinnamaneni",
    "Deputy Executive Engineer": "Miskin Shaik",
    "Executive Engineer": "Battula Sridhar",
    "Superintending Engineer": "Narasimha Murthy B",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 156.92 Crore",
    "Physical Progress (Plan)": "7.51%",
    "Work Completed": "0.44%",
    "Variance (%)": "-7.07%",
    Status: "Delay",
    "Work Cleared": "0.44%",
  },
  {
    "Project Number": "WIN/0101/25-26",
    "Project Name": "N14 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "RVR",
    PMC: "MaRS",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Merla Veeraiah Chowdary",
    "Deputy Executive Engineer": "Veerababu Rokkam",
    "Executive Engineer": "Chinnakotla S R N V Ramesh",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 252.74 Crore",
    "Physical Progress (Plan)": "13.06%",
    "Work Completed": "2.48%",
    "Variance (%)": "-10.58%",
    Status: "Delay",
    "Work Cleared": "2.48%",
  },
  {
    "Project Number": "WIN/0100/25-26",
    "Project Name": "N10 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "RVR",
    PMC: "MaRS",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Vamsi Krishna Nadella",
    "Deputy Executive Engineer": "Veerababu Rokkam",
    "Executive Engineer": "Sali Sridhar",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 605.72 Crore",
    "Physical Progress (Plan)": "28.85%",
    "Work Completed": "0.72%",
    "Variance (%)": "-28.13%",
    Status: "Delay",
    "Work Cleared": "0.8%",
  },
  {
    "Project Number": "WIN/0099/25-26",
    "Project Name": "N8 Road",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "NCC",
    PMC: "LASA",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Mathi Ram Sunil",
    "Deputy Executive Engineer": "Rohit Kumar Muppavarapu",
    "Executive Engineer": "Vanukuri Padmakara Prasad",
    "Superintending Engineer": "Konanki Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 605.05 Crore",
    "Physical Progress (Plan)": "1.66%",
    "Work Completed": "1.67%",
    "Variance (%)": "0.02%",
    Status: "On_track",
    "Work Cleared": "1.67%",
  },
  {
    "Project Number": "WIN/0103/25-26",
    "Project Name": "N17 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "BSCPL",
    PMC: "MaRS",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Ashok Yanikapati",
    "Deputy Executive Engineer": "Veerababu Rokkam",
    "Executive Engineer": "Sali Sridhar",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 186.75 Crore",
    "Physical Progress (Plan)": "22.22%",
    "Work Completed": "0.03%",
    "Variance (%)": "-22.2%",
    Status: "Delay",
    "Work Cleared": "0.03%",
  },
  {
    "Project Number": "WIN/0079/25-26",
    "Project Name": "E5 Road",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "BSR",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Merla Veeraiah Chowdary",
    "Deputy Executive Engineer": "Veerababu Rokkam",
    "Executive Engineer": "Chinnakotla S R N V Ramesh",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 562.88 Crore",
    "Physical Progress (Plan)": "22.58%",
    "Work Completed": "1.83%",
    "Variance (%)": "-20.75%",
    Status: "Delay",
    "Work Cleared": "1.53%",
  },
  {
    "Project Number": "WIN/0083/25-26",
    "Project Name": "E13 Road",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "RVR",
    PMC: "LASA",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "K Omprakash",
    "Deputy Executive Engineer": "Appaji Yandrapu",
    "Executive Engineer": "Vanukuri Padmakara Prasad",
    "Superintending Engineer": "Konanki Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 207.86 Crore",
    "Physical Progress (Plan)": "1.7%",
    "Work Completed": "0.33%",
    "Variance (%)": "-1.37%",
    Status: "Delay",
    "Work Cleared": "0.33%",
  },
  {
    "Project Number": "WIN/0091/25-26",
    "Project Name": "N4 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "BSCPL",
    PMC: "MaRS",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Saisaran Boyina",
    "Deputy Executive Engineer": "Kanhaiya Charan",
    "Executive Engineer": "Chinnakotla S R N V Ramesh",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "26-04-2025",
    "End Date": "25-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 246.42 Crore",
    "Physical Progress (Plan)": "2.89%",
    "Work Completed": "3.08%",
    "Variance (%)": "0.19%",
    Status: "On_track",
    "Work Cleared": "3.21%",
  },
  {
    "Project Number": "WIN/0088/25-26",
    "Project Name": "N1 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "BSR",
    PMC: "Voyants",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Saisaran Boyina",
    "Deputy Executive Engineer": "Kanhaiya Charan",
    "Executive Engineer": "Chinnakotla S R N V Ramesh",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 125.08 Crore",
    "Physical Progress (Plan)": "7.56%",
    "Work Completed": "0%",
    "Variance (%)": "-7.56%",
    Status: "Delay",
    "Work Cleared": "0%",
  },
  {
    "Project Number": "WIN/0096/25-26",
    "Project Name": "E10 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "MEIL",
    PMC: "MaRS",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "K Omprakash",
    "Deputy Executive Engineer": "Appaji Yandrapu",
    "Executive Engineer": "Vanukuri Padmakara Prasad",
    "Superintending Engineer": "Konanki Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 295.84 Crore",
    "Physical Progress (Plan)": "22.72%",
    "Work Completed": "1%",
    "Variance (%)": "-21.72%",
    Status: "Delay",
    "Work Cleared": "0.99%",
  },
  {
    "Project Number": "WIN/0089/25-26",
    "Project Name": "N2 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "BSR",
    PMC: "Voyants",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Merla Veeraiah Chowdary",
    "Deputy Executive Engineer": "Veerababu Rokkam",
    "Executive Engineer": "Chinnakotla S R N V Ramesh",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 111.84 Crore",
    "Physical Progress (Plan)": "44.56%",
    "Work Completed": "0%",
    "Variance (%)": "-44.56%",
    Status: "Delay",
    "Work Cleared": "0%",
  },
  {
    "Project Number": "WIN/0098/25-26",
    "Project Name": "N7 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "RVR",
    PMC: "MaRS",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Ogirala Chaittanya",
    "Deputy Executive Engineer": "Yalla Srinivas",
    "Executive Engineer": "Kalluri Basaveswara Rao",
    "Superintending Engineer": "Narasimha Murthy B",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 453.92 Crore",
    "Physical Progress (Plan)": "3.07%",
    "Work Completed": "0.96%",
    "Variance (%)": "-2.11%",
    Status: "Delay",
    "Work Cleared": "1.08%",
  },
  {
    "Project Number": "WIN/0080/25-26",
    "Project Name": "E7 Road",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "BSR",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Ashok Pinnamaneni",
    "Deputy Executive Engineer": "Miskin Shaik",
    "Executive Engineer": "Battula Sridhar",
    "Superintending Engineer": "Narasimha Murthy B",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 369.39 Crore",
    "Physical Progress (Plan)": "13.05%",
    "Work Completed": "2.59%",
    "Variance (%)": "-10.45%",
    Status: "Delay",
    "Work Cleared": "2.9%",
  },
  {
    "Project Number": "WIN/0090/25-26",
    "Project Name": "N3A and N3B Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "BSCPL",
    PMC: "Voyants",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Vamsi Krishna Nadella",
    "Deputy Executive Engineer": "Veerababu Rokkam",
    "Executive Engineer": "Sali Sridhar",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 154.75 Crore",
    "Physical Progress (Plan)": "2.89%",
    "Work Completed": "2.98%",
    "Variance (%)": "0.09%",
    Status: "On_track",
    "Work Cleared": "2.95%",
  },
  {
    "Project Number": "WIN/0095/25-26",
    "Project Name": "E4 Road",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "MEIL",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Bandaru Katama Raju",
    "Deputy Executive Engineer": "Eraga Sreenivasulu",
    "Executive Engineer": "Battula Sridhar",
    "Superintending Engineer": "Narasimha Murthy B",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 515.53 Crore",
    "Physical Progress (Plan)": "6.42%",
    "Work Completed": "0.79%",
    "Variance (%)": "-5.63%",
    Status: "Delay",
    "Work Cleared": "0.79%",
  },
  {
    "Project Number": "WIN/0092/25-26",
    "Project Name": "N5 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "NCC",
    PMC: "Voyants",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Gopalam Jagadeesh",
    "Deputy Executive Engineer": "Miskin Shaik",
    "Executive Engineer": "Battula Sridhar",
    "Superintending Engineer": "Narasimha Murthy B",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 70.64 Crore",
    "Physical Progress (Plan)": "3.77%",
    "Work Completed": "2.06%",
    "Variance (%)": "-1.71%",
    Status: "Delay",
    "Work Cleared": "2.06%",
  },
  {
    "Project Number": "WIN/0093/25-26",
    "Project Name": "N13 Road",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "RVR",
    PMC: "LASA",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Mahesh Suraboina",
    "Deputy Executive Engineer": "Veerababu Rokkam",
    "Executive Engineer": "Sali Sridhar",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 254.11 Crore",
    "Physical Progress (Plan)": "1.44%",
    "Work Completed": "0.29%",
    "Variance (%)": "-1.16%",
    Status: "Delay",
    "Work Cleared": "0.29%",
  },
  {
    "Project Number": "WIN/0104/25-26",
    "Project Name": "E3 Road - Phase II",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "NCC",
    PMC: "MaRS",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Vukoti Sivagangadhar Rao",
    "Deputy Executive Engineer": "Kanhaiya Charan",
    "Executive Engineer": "Chinnakotla S R N V Ramesh",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 188.46 Crore",
    "Physical Progress (Plan)": "2.42%",
    "Work Completed": "6.96%",
    "Variance (%)": "4.54%",
    Status: "On_track",
    "Work Cleared": "7.13%",
  },
  {
    "Project Number": "WIN/0087/25-26",
    "Project Name": "E16 Road",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "NCC",
    PMC: "Voyants",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Ashok Yanikapati",
    "Deputy Executive Engineer": "Veerababu Rokkam",
    "Executive Engineer": "Sali Sridhar",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 151.45 Crore",
    "Physical Progress (Plan)": "2.15%",
    "Work Completed": "1.22%",
    "Variance (%)": "-0.92%",
    Status: "Delay",
    "Work Cleared": "1.22%",
  },
  {
    "Project Number": "WIN/0084/25-26",
    "Project Name": "E15 Road",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "BSR",
    PMC: "LASA",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Mathi Ram Sunil",
    "Deputy Executive Engineer": "Rohit Kumar Muppavarapu",
    "Executive Engineer": "Vanukuri Padmakara Prasad",
    "Superintending Engineer": "Konanki Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 194.05 Crore",
    "Physical Progress (Plan)": "25.18%",
    "Work Completed": "4.04%",
    "Variance (%)": "-21.14%",
    Status: "Delay",
    "Work Cleared": "4.04%",
  },
  {
    "Project Number": "WIN/0074/25-26",
    "Project Name": "N15 Road",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "NCC",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Ashok Yanikapati",
    "Deputy Executive Engineer": "Veerababu Rokkam",
    "Executive Engineer": "Sali Sridhar",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 342.16 Crore",
    "Physical Progress (Plan)": "31.16%",
    "Work Completed": "3.03%",
    "Variance (%)": "-28.13%",
    Status: "Delay",
    "Work Cleared": "3.13%",
  },
  {
    "Project Number": "WIN/0070/25-26",
    "Project Name": "N12 Road",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "NCC",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Vukoti Sivagangadhar Rao",
    "Deputy Executive Engineer": "Kanhaiya Charan",
    "Executive Engineer": "Chinnakotla S R N V Ramesh",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 461.33 Crore",
    "Physical Progress (Plan)": "39.67%",
    "Work Completed": "2.25%",
    "Variance (%)": "-37.41%",
    Status: "Delay",
    "Work Cleared": "2.26%",
  },
  {
    "Project Number": "WIN/0078/25-26",
    "Project Name": "N11 Road",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "RVR",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Gopalam Jagadeesh, Yenumula Anand Babu",
    "Deputy Executive Engineer": "Miskin Shaik",
    "Executive Engineer": "Battula Sridhar",
    "Superintending Engineer": "Narasimha Murthy B",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 282.64 Crore",
    "Physical Progress (Plan)": "10.88%",
    "Work Completed": "1.65%",
    "Variance (%)": "-9.23%",
    Status: "Delay",
    "Work Cleared": "1.83%",
  },
  {
    "Project Number": "WIN/0060/25-26",
    "Project Name": "N9 Road",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "BSR",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Mathi Ram Sunil",
    "Deputy Executive Engineer": "Rohit Kumar Muppavarapu",
    "Executive Engineer": "Vanukuri Padmakara Prasad",
    "Superintending Engineer": "Konanki Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 398.01 Crore",
    "Physical Progress (Plan)": "10.19%",
    "Work Completed": "4.19%",
    "Variance (%)": "-6%",
    Status: "Delay",
    "Work Cleared": "4.23%",
  },
  {
    "Project Number": "WIN/0086/25-26",
    "Project Name": "N6 Utilities",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "MEIL",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Vamsi Krishna Nadella",
    "Deputy Executive Engineer": "Veerababu Rokkam",
    "Executive Engineer": "Sali Sridhar",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 190.57 Crore",
    "Physical Progress (Plan)": "18.25%",
    "Work Completed": "0.02%",
    "Variance (%)": "-18.23%",
    Status: "Delay",
    "Work Cleared": "0.02%",
  },
  {
    "Project Number": "WIN/0085/25-26",
    "Project Name": "E14 Road",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "MEIL",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "K Omprakash",
    "Deputy Executive Engineer": "Appaji Yandrapu",
    "Executive Engineer": "Vanukuri Padmakara Prasad",
    "Superintending Engineer": "Konanki Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 252.35 Crore",
    "Physical Progress (Plan)": "22.04%",
    "Work Completed": "0.95%",
    "Variance (%)": "-21.09%",
    Status: "Delay",
    "Work Cleared": "0.95%",
  },
  {
    "Project Number": "WIN/0081/25-26",
    "Project Name": "E9 Road",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "RVR",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Ashok Pinnamaneni",
    "Deputy Executive Engineer": "Miskin Shaik",
    "Executive Engineer": "Battula Sridhar",
    "Superintending Engineer": "Narasimha Murthy B",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 436.09 Crore",
    "Physical Progress (Plan)": "14.16%",
    "Work Completed": "2.52%",
    "Variance (%)": "-11.64%",
    Status: "Delay",
    "Work Cleared": "0.59%",
  },
  {
    "Project Number": "WIN/0073/25-26",
    "Project Name": "E8 Road",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "RVR",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "Saisaran Boyina",
    "Deputy Executive Engineer": "Kanhaiya Charan",
    "Executive Engineer": "Chinnakotla S R N V Ramesh",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 387.83 Crore",
    "Physical Progress (Plan)": "13.27%",
    "Work Completed": "1.67%",
    "Variance (%)": "-11.6%",
    Status: "Delay",
    "Work Cleared": "1.71%",
  },
  {
    "Project Number": "WIN/0067/25-26",
    "Project Name": "E3 Road - Phase I",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "NCC",
    PMC: "Aarvee",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer":
      "Vukoti Sivagangadhar Rao",
    "Deputy Executive Engineer": "Kanhaiya Charan",
    "Executive Engineer": "Chinnakotla S R N V Ramesh",
    "Superintending Engineer": "Yedidhi S R K V V L Narasimha Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "28-04-2025",
    "End Date": "27-04-2027",
    "Cost (Rs. In Cr.)": "Rs. 379.43 Crore",
    "Physical Progress (Plan)": "9.27%",
    "Work Completed": "4.54%",
    "Variance (%)": "-4.73%",
    Status: "Delay",
    "Work Cleared": "4.83%",
  },
  {
    "Project Number": "WIN/0038/24-25",
    "Project Name": "Bungalows for Principal Secretaries & Secretaries",
    HOD: "APCRDA",
    "Funding Agency": "HUDCO",
    Contractor: "KMV",
    PMC: "-",
    Division: "H&B Buildings",
    "Assistant Engineer / Assistant Executive Engineer":
      "Guttameda Vinod Kumar, Galipothu Pavan Kumar, Kasukurthi Subba Rao",
    "Deputy Executive Engineer": "Gurugubelli Appalanaidu",
    "Executive Engineer": "Manne Venkata Vidya Sagar",
    "Superintending Engineer": "Srinivas D.L",
    "Chief Engineer": "Gandreti Venkateswara Rao",
    "Start Date": "28-04-2025",
    "End Date": "27-10-2026",
    "Cost (Rs. In Cr.)": "Rs. 429.23 Crore",
    "Physical Progress (Plan)": "61.75%",
    "Work Completed": "13.53%",
    "Variance (%)": "-48.22%",
    Status: "Delay",
    "Work Cleared": "13.85%",
  },
  {
    "Project Number": "WIN/0032/24-25",
    "Project Name": "Hon'ble MLAs and MLCs and AIS Officers - Housing",
    HOD: "APCRDA",
    "Funding Agency": "WB+ADB",
    Contractor: "NCC",
    PMC: "-",
    Division: "H&B Buildings",
    "Assistant Engineer / Assistant Executive Engineer":
      "Guttameda Vinod Kumar, Galipothu Pavan Kumar, Kasukurthi Subba Rao",
    "Deputy Executive Engineer": "Gurugubelli Appalanaidu",
    "Executive Engineer": "Paidi Vinodh Kumar",
    "Superintending Engineer": "Bitra Srinivasa Rao",
    "Chief Engineer": "Punnam V K Bhaskar",
    "Start Date": "28-04-2025",
    "End Date": "27-10-2026",
    "Cost (Rs. In Cr.)": "Rs. 452.3 Crore",
    "Physical Progress (Plan)": "4.05%",
    "Work Completed": "23.03%",
    "Variance (%)": "18.98%",
    Status: "On_track",
    "Work Cleared": "24.03%",
  },
  {
    "Project Number": "WIN/0043/24-25",
    "Project Name": "Assembly - Structure",
    HOD: "APCRDA",
    "Funding Agency": "HUDCO",
    Contractor: "L&T",
    PMC: "TUV",
    Division: "H&B Offices",
    "Assistant Engineer / Assistant Executive Engineer": "Thulisa Naik Vadithe",
    "Deputy Executive Engineer": "Kurisetty Venkata Satya Pavan Kumar",
    "Executive Engineer": "Gorju V S D Hima Bindu",
    "Superintending Engineer": "Srinivas D.L",
    "Chief Engineer": "Addagada Venkateswara Rao",
    "Start Date": "27-05-2025",
    "End Date": "26-05-2027",
    "Cost (Rs. In Cr.)": "Rs. 617.34 Crore",
    "Physical Progress (Plan)": "4.31%",
    "Work Completed": "0.54%",
    "Variance (%)": "-3.78%",
    Status: "Delay",
    "Work Cleared": "0.55%",
  },
  {
    "Project Number": "WIN/0044/24-25",
    "Project Name": "High Court",
    HOD: "APCRDA",
    "Funding Agency": "HUDCO",
    Contractor: "NCC",
    PMC: "TUV",
    Division: "H&B Offices",
    "Assistant Engineer / Assistant Executive Engineer":
      "Thulisa Naik Vadithe, Jatavathu V B K Pradeep, VSHG Phanikumar A",
    "Deputy Executive Engineer": "Kurisetty Venkata Satya Pavan Kumar",
    "Executive Engineer": "Gorju V S D Hima Bindu",
    "Superintending Engineer": "Srinivas D.L",
    "Chief Engineer": "Punnam V K Bhaskar",
    "Start Date": "21-06-2025",
    "End Date": "20-06-2027",
    "Cost (Rs. In Cr.)": "Rs. 786.06 Crore",
    "Physical Progress (Plan)": "11.39%",
    "Work Completed": "0.05%",
    "Variance (%)": "-11.35%",
    Status: "Delay",
    "Work Cleared": "0.05%",
  },
  {
    "Project Number": "WIN/0074/24-25",
    "Project Name": "Project Office",
    HOD: "APCRDA",
    "Funding Agency": "HUDCO",
    Contractor: "KPC",
    PMC: "Feedback",
    Division: "H&B Offices",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Paidi Vinodh Kumar",
    "Superintending Engineer": "",
    "Chief Engineer": "Punnam V K Bhaskar",
    "Start Date": "12-02-2024",
    "End Date": "31-08-2025",
    "Cost (Rs. In Cr.)": "Rs. 135.98 Crore",
    "Physical Progress (Plan)": "100%",
    "Work Completed": "100%",
    "Variance (%)": "0%",
    Status: "Completed",
    "Work Cleared": "100%",
  },
  {
    "Project Number": "WIN/0134/25-26",
    "Project Name": "Bungalows for Hon'ble Ministers & Hon'ble Judges",
    HOD: "APCRDA",
    "Funding Agency": "HUDCO",
    Contractor: "BSR",
    PMC: "",
    Division: "H&B Buildings",
    "Assistant Engineer / Assistant Executive Engineer":
      "Guttameda Vinod Kumar, Galipothu Pavan Kumar, Kasukurthi Subba Rao",
    "Deputy Executive Engineer": "Gurugubelli Appalanaidu",
    "Executive Engineer": "Manne Venkata Vidya Sagar",
    "Superintending Engineer": "Srinivas D.L",
    "Chief Engineer": "Gandreti Venkateswara Rao",
    "Start Date": "28-04-2025",
    "End Date": "27-10-2026",
    "Cost (Rs. In Cr.)": "Rs. 419.07 Crore",
    "Physical Progress (Plan)": "82.51%",
    "Work Completed": "8.29%",
    "Variance (%)": "-74.22%",
    Status: "Delay",
    "Work Cleared": "8.6%",
  },
  {
    "Project Number": "WIN/0106/25-26",
    "Project Name": "E13 Road - Extn. upto NH-16",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "MEIL",
    PMC: "Voyants",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Vanukuri Padmakara Prasad",
    "Superintending Engineer": "Konanki Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "09-07-2025",
    "End Date": "08-07-2027",
    "Cost (Rs. In Cr.)": "Rs. 400.55 Crore",
    "Physical Progress (Plan)": "25.68%",
    "Work Completed": "0%",
    "Variance (%)": "-25.68%",
    Status: "Delay",
    "Work Cleared": "0%",
  },
  {
    "Project Number": "WIN/0105/25-26",
    "Project Name": "E15 Road - Extn. upto NH-16",
    HOD: "ADCL",
    "Funding Agency": "HUDCO",
    Contractor: "MEIL",
    PMC: "Voyants",
    Division: "Trunk Infra",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Vanukuri Padmakara Prasad",
    "Superintending Engineer": "Konanki Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "09-07-2025",
    "End Date": "08-07-2026",
    "Cost (Rs. In Cr.)": "Rs. 72.78 Crore",
    "Physical Progress (Plan)": "25.68%",
    "Work Completed": "0.38%",
    "Variance (%)": "-25.3%",
    Status: "Delay",
    "Work Cleared": "0.53%",
  },
  {
    "Project Number": "WIN/0139/25-26",
    "Project Name": "3 PEB Structures near Project Office",
    HOD: "APCRDA",
    "Funding Agency": "Other Funds",
    Contractor: "NCC",
    PMC: "",
    Division: "H&B Offices",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Paidi Vinodh Kumar",
    "Superintending Engineer": "",
    "Chief Engineer": "Punnam V K Bhaskar",
    "Start Date": "22-05-2025",
    "End Date": "20-09-2025",
    "Cost (Rs. In Cr.)": "Rs. 28.69 Crore",
    "Physical Progress (Plan)": "100%",
    "Work Completed": "100%",
    "Variance (%)": "0%",
    Status: "Completed",
    "Work Cleared": "100%",
  },
  {
    "Project Number": "WIN/0108/25-26",
    "Project Name": "Water Distribution Centres (WDCs)",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "NCC",
    PMC: "-",
    Division: "Water Supply",
    "Assistant Engineer / Assistant Executive Engineer": "K Omprakash",
    "Deputy Executive Engineer": "Appaji Yandrapu",
    "Executive Engineer": "Vanukuri Padmakara Prasad",
    "Superintending Engineer": "K Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "27-09-2025",
    "End Date": "26-09-2027",
    "Cost (Rs. In Cr.)": "Rs. 376.81 Crore",
    "Physical Progress (Plan)": "0%",
    "Work Completed": "0%",
    "Variance (%)": "0%",
    Status: "On_track",
    "Work Cleared": "0%",
  },
  {
    "Project Number": "WIN/0107/25-26",
    "Project Name": "Water Treatment Plant (WTP)",
    HOD: "ADCL",
    "Funding Agency": "WB+ADB",
    Contractor: "NCC",
    PMC: "-",
    Division: "Water Supply",
    "Assistant Engineer / Assistant Executive Engineer": "K Omprakash",
    "Deputy Executive Engineer": "Appaji Yandrapu",
    "Executive Engineer": "Vanukuri Padmakara Prasad",
    "Superintending Engineer": "K Nageswara Rao",
    "Chief Engineer": "Balabadrapathruni Narasimha Murthy",
    "Start Date": "27-09-2025",
    "End Date": "26-09-2027",
    "Cost (Rs. In Cr.)": "Rs. 411.54 Crore",
    "Physical Progress (Plan)": "0%",
    "Work Completed": "0%",
    "Variance (%)": "0%",
    Status: "On_track",
    "Work Cleared": "0%",
  },
  {
    "Project Number": "WIN/0008/25-26",
    "Project Name": "Jungle Clearance",
    HOD: "APCRDA",
    "Funding Agency": "Other Funds",
    Contractor: "NCC",
    PMC: "-",
    Division: "H&B Offices",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Paidi Vinodh Kumar",
    "Superintending Engineer": "",
    "Chief Engineer": "Punnam V K Bhaskar",
    "Start Date": "28-08-2024",
    "End Date": "27-09-2024",
    "Cost (Rs. In Cr.)": "Rs. 31.95 Crore",
    "Physical Progress (Plan)": "100%",
    "Work Completed": "100%",
    "Variance (%)": "0%",
    Status: "Completed",
    "Work Cleared": "0%",
  },
  {
    "Project Number": "WIN/0163/25-26",
    "Project Name": "MEP for 3 PEB structures",
    HOD: "APCRDA",
    "Funding Agency": "Other Funds",
    Contractor: "NCC",
    PMC: "-",
    Division: "H&B Offices",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Paidi Vinodh Kumar",
    "Superintending Engineer": "",
    "Chief Engineer": "Punnam V K Bhaskar",
    "Start Date": "04-09-2025",
    "End Date": "03-01-2026",
    "Cost (Rs. In Cr.)": "Rs. 40.36 Crore",
    "Physical Progress (Plan)": "56.38%",
    "Work Completed": "20%",
    "Variance (%)": "-36.38%",
    Status: "Delay",
    "Work Cleared": "0%",
  },
  {
    "Project Number": "WIN/0170/25-26",
    "Project Name": "Critical Infrastructure and Investment Plan (CIIP), O&M",
    HOD: "ADCL",
    "Funding Agency": "Other Funds",
    Contractor: "NCC",
    PMC: "-",
    Division: "LPS Infra",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "",
    "Superintending Engineer": "",
    "Chief Engineer": "Chilukuri Dhanunjaya",
    "Start Date": "06-06-2025",
    "End Date": "25-12-2025",
    "Cost (Rs. In Cr.)": "Rs. 904 Crore",
    "Physical Progress (Plan)": "0%",
    "Work Completed": "0%",
    "Variance (%)": "0%",
    Status: "On_track",
    "Work Cleared": "0%",
  },
  {
    "Project Number": "WIN/0113/25-26",
    "Project Name": "AGC Infrastructure",
    HOD: "APCRDA",
    "Funding Agency": "Other Funds",
    Contractor: "MEIL",
    PMC: "Tractebel",
    Division: "H&B Offices",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Meesala Ravi Kumar",
    "Superintending Engineer": "",
    "Chief Engineer": "Addagada Venkateswara Rao",
    "Start Date": "25-10-2025",
    "End Date": "24-10-2027",
    "Cost (Rs. In Cr.)": "Rs. 1052.67 Crore",
    "Physical Progress (Plan)": "0%",
    "Work Completed": "0%",
    "Variance (%)": "0%",
    Status: "On_track",
    "Work Cleared": "0%",
  },
  {
    "Project Number": "WIN/0069/25-26",
    "Project Name": "220KV EHV lines rerouting",
    HOD: "APTRANSCO",
    "Funding Agency": "NABARD",
    Contractor: "BSR",
    PMC: "-",
    Division: "Electrical Infra",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Akkidas Jessica Rajeswari",
    "Superintending Engineer": "",
    "Chief Engineer": "",
    "Start Date": "08-01-2025",
    "End Date": "31-07-2027",
    "Cost (Rs. In Cr.)": "Rs. 1082.44 Crore",
    "Physical Progress (Plan)": "0.33%",
    "Work Completed": "12.81%",
    "Variance (%)": "12.48%",
    Status: "On_track",
    "Work Cleared": "100%",
  },
  {
    "Project Number": "WIN/0068/25-26",
    "Project Name": "400KV DC lines rerouting",
    HOD: "APTRANSCO",
    "Funding Agency": "NABARD",
    Contractor: "PVR & KRRTPPL",
    PMC: "",
    Division: "Electrical Infra",
    "Assistant Engineer / Assistant Executive Engineer": "",
    "Deputy Executive Engineer": "",
    "Executive Engineer": "Akkidas Jessica Rajeswari",
    "Superintending Engineer": "",
    "Chief Engineer": "",
    "Start Date": "09-04-2025",
    "End Date": "08-10-2026",
    "Cost (Rs. In Cr.)": "Rs. 390.06 Crore",
    "Physical Progress (Plan)": "0%",
    "Work Completed": "2.71%",
    "Variance (%)": "2.71%",
    Status: "On_track",
    "Work Cleared": "100%",
  },
];

/* ---------- INTERNAL TYPING / PARSING ---------- */

type Project = {
  id: number;
  projectNumber: string;
  name: string;
  hod: string;
  fundingAgency: string;
  contractor: string;
  pmc: string;
  division: string;
  assistantEngineer: string;
  deputyExecutiveEngineer: string;
  executiveEngineer: string;
  superintendingEngineer: string;
  chiefEngineer: string;
  startDate: string;
  endDate: string;
  costCr: number;
  costLabel: string;
  physicalPlan: number;
  physicalPlanLabel: string;
  workCompleted: number;
  workCompletedLabel: string;
  variance: number;
  varianceLabel: string;
  status: string;
  workClearedLabel: string;
};

// RawProject represents the incoming JSON shape where values are strings (or possibly undefined)
type RawProject = { [key: string]: string | undefined };

const parsePercent = (s: string | undefined): number =>
  s ? parseFloat(s.replace(/[^\d.-]/g, "")) || 0 : 0;

// FIXED: robust crore parsing
const parseCrore = (s: string | undefined): number => {
  if (!s) return 0;
  // Extract first numeric block like "2,129.6" or "350.19" or "904"
  const match = s.match(/[\d,]+(?:\.\d+)?/);
  if (!match) return 0;
  const numeric = match[0].replace(/,/g, "");
  return parseFloat(numeric) || 0;
};

const projects: Project[] = rawProjects.map((p: RawProject, idx: number) => {
  const costLabel = p["Cost (Rs. In Cr.)"] ?? "";
  const physicalPlanLabel = p["Physical Progress (Plan)"] ?? "";
  const workCompletedLabel = p["Work Completed"] ?? "";
  const varianceLabel = p["Variance (%)"] ?? "";
  const workClearedLabel = p["Work Cleared"] ?? "";

  return {
    id: idx + 1,
    projectNumber: p["Project Number"] ?? "",
    name: p["Project Name"] ?? "",
    hod: p["HOD"] ?? "",
    fundingAgency: p["Funding Agency"] ?? "",
    contractor: p["Contractor"] ?? "",
    pmc: p["PMC"] ?? "",
    division: p["Division"] ?? "",
    assistantEngineer:
      p["Assistant Engineer / Assistant Executive Engineer"] ?? "",
    deputyExecutiveEngineer: p["Deputy Executive Engineer"] ?? "",
    executiveEngineer: p["Executive Engineer"] ?? "",
    superintendingEngineer: p["Superintending Engineer"] ?? "",
    chiefEngineer: p["Chief Engineer"] ?? "",
    startDate: p["Start Date"] ?? "",
    endDate: p["End Date"] ?? "",
    costCr: parseCrore(costLabel),
    costLabel,
    physicalPlan: parsePercent(physicalPlanLabel),
    physicalPlanLabel,
    workCompleted: parsePercent(workCompletedLabel),
    workCompletedLabel,
    variance: parsePercent(varianceLabel),
    varianceLabel,
    status: p["Status"] ?? "",
    workClearedLabel,
  };
});

/* ---------- COMPONENT ---------- */

const AICCCDashboard = () => {
  const projectPhases = [
    {
      phase: "Planning & Approval",
      description:
        "Initial project conception, feasibility studies, DPR preparation, and obtaining necessary approvals from competent authorities.",
      icon: Target,
    },
    {
      phase: "Tendering Process",
      description:
        "Preparation of tender documents, NIT publication, bid submission, technical and financial evaluation, and contract award.",
      icon: FileCheck,
    },
    {
      phase: "Execution & Monitoring",
      description:
        "Site mobilization, construction activities, quality control, progress monitoring, and adherence to specifications and timelines.",
      icon: Users,
    },
    {
      phase: "Completion & Handover",
      description:
        "Final inspection, quality testing, defect rectification, project documentation, and formal handover to authorities.",
      icon: Award,
    },
  ];

  // FILTER STATE
  const [filters, setFilters] = useState({
    name: "",
    hod: "",
    fundingAgency: "",
    contractor: "",
    pmc: "",
    division: "",
  });

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    projects[0]?.id ?? null
  );

  const handleFilterChange = (field: keyof typeof filters, value: string) =>
    setFilters((prev) => ({ ...prev, [field]: value }));

  // dropdown options
  const projectNameOptions = useMemo(
    () => Array.from(new Set(projects.map((p) => p.name))).sort(),
    []
  );
  const hodOptions = useMemo(
    () => Array.from(new Set(projects.map((p) => p.hod))).sort(),
    []
  );
  const fundingOptions = useMemo(
    () => Array.from(new Set(projects.map((p) => p.fundingAgency))).sort(),
    []
  );
  const contractorOptions = useMemo(
    () => Array.from(new Set(projects.map((p) => p.contractor))).sort(),
    []
  );
  const pmcOptions = useMemo(
    () => Array.from(new Set(projects.map((p) => p.pmc))).sort(),
    []
  );
  const divisionOptions = useMemo(
    () => Array.from(new Set(projects.map((p) => p.division))).sort(),
    []
  );

  const filteredProjects = useMemo(
    () =>
      projects.filter((p) => {
        const matchName = !filters.name || p.name === filters.name;
        const matchHod = !filters.hod || p.hod === filters.hod;
        const matchFunding =
          !filters.fundingAgency || p.fundingAgency === filters.fundingAgency;
        const matchContractor =
          !filters.contractor || p.contractor === filters.contractor;
        const matchPmc = !filters.pmc || p.pmc === filters.pmc;
        const matchDivision =
          !filters.division || p.division === filters.division;
        return (
          matchName &&
          matchHod &&
          matchFunding &&
          matchContractor &&
          matchPmc &&
          matchDivision
        );
      }),
    [filters]
  );

  const selectedProject =
    filteredProjects.find((p) => p.id === selectedProjectId) ||
    filteredProjects[0] ||
    null;

  // summary stats
  const totalProjects = projects.length;
  const activeProjects = projects.filter(
    (p) => p.status === "On_track" || p.status === "Delay"
  ).length;
  const totalBudget = projects.reduce((sum, p) => sum + p.costCr, 0);
  const avgProgress =
    projects.reduce((sum, p) => sum + p.workCompleted, 0) /
    (projects.length || 1);

  const selectBaseClasses =
    "w-full appearance-none rounded-xl border border-border/40 bg-background/60 px-3 py-2.5 text-sm text-foreground shadow-inner focus:outline-none focus:ring-2 focus:ring-primary/60";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              AICCC Project Dashboard
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Search works by project, HOD, funding agency, contractor, PMC and
              division, then drill into detailed hierarchy and progress.
            </p>
          </div>
        </motion.div>

        {/* Filters + Summary */}
        <div className="grid lg:grid-cols-[2.2fr,1fr] gap-6">
          {/* FILTER CARD */}
          <GlassCard className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <FilterIcon className="w-4 h-4 text-primary" />
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                Filter Data
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Project */}
              <div className="space-y-1">
                <label className="block text-xs font-medium text-muted-foreground">
                  Project Name
                </label>
                <div className="relative">
                  <select
                    className={selectBaseClasses}
                    value={filters.name}
                    onChange={(e) => handleFilterChange("name", e.target.value)}
                  >
                    <option value="">All projects</option>
                    {projectNameOptions.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                    ▼
                  </span>
                </div>
              </div>

              {/* HOD */}
              <div className="space-y-1">
                <label className="block text-xs font-medium text-muted-foreground">
                  HOD
                </label>
                <div className="relative">
                  <select
                    className={selectBaseClasses}
                    value={filters.hod}
                    onChange={(e) => handleFilterChange("hod", e.target.value)}
                  >
                    <option value="">All HODs</option>
                    {hodOptions.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                    ▼
                  </span>
                </div>
              </div>

              {/* Division */}
              <div className="space-y-1">
                <label className="block text-xs font-medium text-muted-foreground">
                  Division
                </label>
                <div className="relative">
                  <select
                    className={selectBaseClasses}
                    value={filters.division}
                    onChange={(e) =>
                      handleFilterChange("division", e.target.value)
                    }
                  >
                    <option value="">All divisions</option>
                    {divisionOptions.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                    ▼
                  </span>
                </div>
              </div>

              {/* Funding Agency */}
              <div className="space-y-1">
                <label className="block text-xs font-medium text-muted-foreground">
                  Funding Agency
                </label>
                <div className="relative">
                  <select
                    className={selectBaseClasses}
                    value={filters.fundingAgency}
                    onChange={(e) =>
                      handleFilterChange("fundingAgency", e.target.value)
                    }
                  >
                    <option value="">All agencies</option>
                    {fundingOptions.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                    ▼
                  </span>
                </div>
              </div>

              {/* Contractor */}
              <div className="space-y-1">
                <label className="block text-xs font-medium text-muted-foreground">
                  Contractor
                </label>
                <div className="relative">
                  <select
                    className={selectBaseClasses}
                    value={filters.contractor}
                    onChange={(e) =>
                      handleFilterChange("contractor", e.target.value)
                    }
                  >
                    <option value="">All contractors</option>
                    {contractorOptions.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                    ▼
                  </span>
                </div>
              </div>

              {/* PMC */}
              <div className="space-y-1">
                <label className="block text-xs font-medium text-muted-foreground">
                  PMC
                </label>
                <div className="relative">
                  <select
                    className={selectBaseClasses}
                    value={filters.pmc}
                    onChange={(e) => handleFilterChange("pmc", e.target.value)}
                  >
                    <option value="">All PMCs</option>
                    {pmcOptions.map((v) => (
                      <option key={v} value={v}>
                        {v}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-xs text-muted-foreground">
                    ▼
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* SUMMARY */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <GlassCard>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground">
                    Total Projects
                  </p>
                  <p className="text-2xl font-semibold">{totalProjects}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground">
                    Active (On-track + Delay)
                  </p>
                  <p className="text-2xl font-semibold">{activeProjects}</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground">
                    Total Cost
                  </p>
                  <p className="text-2xl font-semibold">
                    ₹{totalBudget.toLocaleString("en-IN")} Cr
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase text-muted-foreground">
                    Avg. Work Completed
                  </p>
                  <p className="text-2xl font-semibold">
                    {avgProgress.toFixed(1)}%
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* RESULTS + DETAIL */}
        <div className="grid lg:grid-cols-[1.6fr,1.2fr] gap-6">
          {/* RESULTS TABLE */}
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Results</h2>
              <p className="text-sm text-muted-foreground">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="border-b border-border text-xs uppercase text-muted-foreground">
                  <tr>
                    <th className="px-3 py-2 text-left">Project</th>
                    <th className="px-3 py-2 text-left">Project No.</th>
                    <th className="px-3 py-2 text-left">Division</th>
                    <th className="px-3 py-2 text-left">PMC</th>
                    <th className="px-3 py-2 text-left">Status</th>
                    <th className="px-3 py-2 text-right">Work Completed</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((p) => {
                    const isSelected = selectedProject?.id === p.id;
                    return (
                      <tr
                        key={p.id}
                        onClick={() => setSelectedProjectId(p.id)}
                        className={`cursor-pointer border-b border-border/60 last:border-0 transition-colors ${
                          isSelected ? "bg-primary/10" : "hover:bg-muted/40"
                        }`}
                      >
                        <td className="px-3 py-2 font-medium">{p.name}</td>
                        <td className="px-3 py-2">{p.projectNumber}</td>
                        <td className="px-3 py-2">{p.division}</td>
                        <td className="px-3 py-2">{p.pmc || "-"}</td>
                        <td className="px-3 py-2">
                          <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 text-[11px] font-medium capitalize">
                            {p.status.replace("_", " ")}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <span>{p.workCompletedLabel}</span>
                            <div className="w-20 h-1.5 rounded-full bg-muted overflow-hidden">
                              <div
                                className="h-1.5 rounded-full bg-primary"
                                style={{ width: `${p.workCompleted}%` }}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {filteredProjects.length === 0 && (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-3 py-6 text-center text-muted-foreground"
                      >
                        No projects match the current filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </GlassCard>

          {/* DETAIL PANEL */}
          <GlassCard className="space-y-4">
            <h2 className="text-2xl font-semibold">Project Details</h2>
            {!selectedProject ? (
              <p className="text-sm text-muted-foreground">
                Select a project from the table to view full details.
              </p>
            ) : (
              <>
                <div>
                  <p className="text-xs uppercase text-muted-foreground mb-1">
                    Project
                  </p>
                  <p className="text-lg font-semibold">
                    {selectedProject.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Project No: {selectedProject.projectNumber}
                  </p>
                </div>

                {/* hierarchy */}
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Assistant Engineer / Assistant Executive Engineer
                    </p>
                    <p className="font-medium">
                      {selectedProject.assistantEngineer || "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      PMC:{" "}
                      <span className="text-foreground font-semibold">
                        {selectedProject.pmc || "-"}
                      </span>
                      <br />
                      Division:{" "}
                      <span className="text-foreground font-semibold">
                        {selectedProject.division}
                      </span>
                      <br />
                      Funding Agency:{" "}
                      <span className="text-foreground font-semibold">
                        {selectedProject.fundingAgency}
                      </span>
                      <br />
                      Contractor:{" "}
                      <span className="text-foreground font-semibold">
                        {selectedProject.contractor || "-"}
                      </span>
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Deputy Executive Engineer
                    </p>
                    <p className="font-medium">
                      {selectedProject.deputyExecutiveEngineer || "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Executive Engineer
                    </p>
                    <p className="font-medium">
                      {selectedProject.executiveEngineer || "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Superintending Engineer
                    </p>
                    <p className="font-medium">
                      {selectedProject.superintendingEngineer || "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Chief Engineer
                    </p>
                    <p className="font-medium">
                      {selectedProject.chiefEngineer || "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      HOD
                    </p>
                    <p className="font-medium">{selectedProject.hod}</p>
                  </div>
                </div>

                {/* dates + cost + status */}
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Start Date
                    </p>
                    <p className="font-medium">{selectedProject.startDate}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      End Date
                    </p>
                    <p className="font-medium">{selectedProject.endDate}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Cost (Rs. in Cr.)
                    </p>
                    <p className="font-medium">
                      {selectedProject.costLabel || "-"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Status
                    </p>
                    <p className="font-medium capitalize">
                      {selectedProject.status.replace("_", " ")}
                    </p>
                  </div>
                </div>

                {/* progress */}
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Physical Progress (Plan)
                    </p>
                    <p className="font-medium">
                      {selectedProject.physicalPlanLabel}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Work Completed
                    </p>
                    <p className="font-medium">
                      {selectedProject.workCompletedLabel}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Variance (%)
                    </p>
                    <p
                      className={`font-medium ${
                        selectedProject.variance < 0
                          ? "text-red-500"
                          : selectedProject.variance > 0
                          ? "text-emerald-500"
                          : ""
                      }`}
                    >
                      {selectedProject.varianceLabel}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-muted-foreground">
                      Work Cleared
                    </p>
                    <p className="font-medium">
                      {selectedProject.workClearedLabel}
                    </p>
                  </div>
                </div>
              </>
            )}
          </GlassCard>
        </div>

        {/* Mission + Cycle at bottom */}
        <div className="grid lg:grid-cols-2 gap-6">
          <GlassCard className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To provide a comprehensive, standardized reference for
              construction terminology that aids engineers, contractors,
              government officials, and stakeholders in understanding and
              implementing construction projects efficiently.
            </p>
          </GlassCard>

          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left"
            >
              Government Project Construction Cycle
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-4">
              {projectPhases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <GlassCard key={index} delay={index * 0.1}>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold mb-1">
                          {phase.phase}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AICCCDashboard;
