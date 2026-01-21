import React from "react";

const AmaravatiTrunkInfra: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Amaravati Capital City <br />
        Trunk Infrastructure Road
      </h1>

      <p style={styles.note}>
        This document describes the standard trunk infrastructure road layout
        adopted for Amaravati, following time-tested public works engineering
        practices with integrated utilities and bridge structures.
      </p>

      {/* MEDIAN ZONE */}
      <section style={styles.section}>
        <h2>1. Median Zone</h2>

        <h3>Typical Utilities</h3>
        <ul>
          <li>EHV – Extra High Voltage</li>
          <li>MV – Medium Voltage</li>
        </ul>

        <h3>Primary Pavements & Features</h3>
        <ul>
          <li>Median pavement</li>
          <li>Shrubbery (LHS & RHS)</li>
          <li>Plantation</li>
          <li>Street lighting poles</li>
        </ul>

        <div style={styles.imageBox}>
          <p>Sample Image – Median utilities & plantation</p>
          <img src="median-placeholder.jpg" alt="Median Zone" style={styles.image} />
        </div>
      </section>

      {/* BRT CORRIDOR */}
      <section style={styles.section}>
        <h2>2. BRT Corridor</h2>

        <h3>Typical Utilities</h3>
        <ul>
          <li>EHV</li>
          <li>MV</li>
        </ul>

        <h3>Primary Pavements & Facilities</h3>
        <ul>
          <li>BRT carriageway</li>
          <li>BRT shelters – LHS & RHS</li>
          <li>BRT plantation – LHS & RHS</li>
          <li>Street lighting – LHS & RHS</li>
        </ul>

        <div style={styles.imageBox}>
          <p>Sample Image – BRT carriageway & shelter</p>
          <img src="brt-placeholder.jpg" alt="BRT Corridor" style={styles.image} />
        </div>
      </section>

      {/* LEFT HAND CORRIDOR */}
      <section style={styles.section}>
        <h2>3. Left Hand Corridor (LHS)</h2>

        <h3>Utilities</h3>
        <ul>
          <li>Storm Water Drain (SWD)</li>
          <li>Reuse water pipeline</li>
          <li>Gas pipeline</li>
          <li>Water supply line</li>
          <li>MV power cables</li>
        </ul>

        <h3>Surface Elements</h3>
        <ul>
          <li>Carriageway edge</li>
          <li>Shyness & kerb</li>
          <li>Plantation strip</li>
          <li>Cycle track</li>
          <li>Green belt</li>
          <li>Sidewalk (footpath)</li>
          <li>Buffer zone</li>
        </ul>

        <div style={styles.imageBox}>
          <p>Sample Image – LHS utility corridor</p>
          <img src="lhs-placeholder.jpg" alt="Left Hand Corridor" style={styles.image} />
        </div>
      </section>

      {/* RIGHT HAND CORRIDOR */}
      <section style={styles.section}>
        <h2>4. Right Hand Corridor (RHS)</h2>

        <h3>Utilities</h3>
        <ul>
          <li>Storm Water Drain (SWD)</li>
          <li>ICT ducts</li>
          <li>Sewer line</li>
          <li>Power MV cables</li>
          <li>Power RCC duct</li>
          <li>Reuse water pipeline</li>
        </ul>

        <h3>Surface Elements</h3>
        <ul>
          <li>Carriageway edge</li>
          <li>Shyness & kerb</li>
          <li>Plantation strip</li>
          <li>Cycle track</li>
          <li>Green belt</li>
          <li>Sidewalk (footpath)</li>
          <li>Buffer zone</li>
        </ul>

        <div style={styles.imageBox}>
          <p>Sample Image – RHS utility corridor</p>
          <img src="rhs-placeholder.jpg" alt="Right Hand Corridor" style={styles.image} />
        </div>
      </section>

      {/* BRIDGE & STRUCTURES */}
      <section style={styles.section}>
        <h2>5. Minor Bridge & Structure Components</h2>

        <h3>Foundations</h3>
        <ul>
          <li>Open foundation</li>
          <li>Raft foundation</li>
          <li>Abutment wall</li>
          <li>Abutment cap</li>
        </ul>

        <h3>Substructure</h3>
        <ul>
          <li>Pedestal</li>
          <li>Bearings</li>
        </ul>

        <h3>Superstructure</h3>
        <ul>
          <li>Girders / U-shaped box girders</li>
          <li>Deck slab</li>
          <li>Crash barriers</li>
          <li>Expansion joints</li>
          <li>Approach slab</li>
          <li>Drainage spouts</li>
        </ul>

        <div style={styles.imageBox}>
          <p>Sample Image – Bridge cross section</p>
          <img src="bridge-placeholder.jpg" alt="Bridge Structure" style={styles.image} />
        </div>
      </section>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f4f6f8",
    lineHeight: 1.6,
  },
  title: {
    color: "#003366",
    textAlign: "center",
  },
  note: {
    fontStyle: "italic",
    color: "#444",
    textAlign: "center",
    marginBottom: "30px",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: "20px",
    marginBottom: "25px",
    borderLeft: "6px solid #003366",
  },
  imageBox: {
    marginTop: "15px",
    padding: "10px",
    border: "1px dashed #999",
    backgroundColor: "#eef2f5",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
};

export default AmaravatiTrunkInfra;
