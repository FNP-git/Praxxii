import React, { useState, useEffect } from 'react';
import detectBrowser from '../utils/detectBrowser';
import './Form.css';

const Form = () => {
  const [carData, setCarData] = useState({});
  const [partList, setPartList] = useState([]);
  const [showMakeDropdown, setShowMakeDropdown] = useState(false);
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    leadLabel: "PRAXXII GLOBAL",
    fullName: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    part: "",
    vin: "",
    email: "",
    zip: "",
    browser: "",
  });

  useEffect(() => {
    fetch('/carData.json')
      .then((res) => res.json())
      .then((data) => setCarData(data))
      .catch((err) => console.error('Error loading car data:', err));

    fetch('/smallParts.json')
      .then((res) => res.json())
      .then((data) => setPartList(data))
      .catch((err) => console.error('Error loading parts list:', err));
  }, []);

  useEffect(() => {
    const browser = detectBrowser();
    setFormData((prevData) => ({ ...prevData, browser }));
  }, []);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, i) => 1950 + i);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fullName" && /[^a-zA-Z\s]/.test(value)) return;
    if ((name === "phone" || name === "zip") && /[^0-9]/.test(value)) return;
    setFormData({ ...formData, [name]: value });
  };

  const allMakes = Object.keys(carData).sort();
  const filteredMakes = allMakes.filter((m) => m.toLowerCase().includes(formData.make.toLowerCase()));
  const modelsForMake = carData[formData.make] || [];
  const filteredModels = modelsForMake.filter((mod) => mod.toLowerCase().includes(formData.model.toLowerCase()));
  const filteredParts = partList.filter((p) => p.toLowerCase().includes(formData.part.toLowerCase()));

  const handleSelectMake = (make) => {
    setFormData({ ...formData, make, model: '' });
    setShowMakeDropdown(false);
  };

  const handleSelectModel = (model) => {
    setFormData({ ...formData, model });
    setShowModelDropdown(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      let result;
      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response from server:", text);
        throw new Error("Server did not return JSON");
      }

      if (!response.ok) {
        const errorMessages = {};
        let alertMessage = "Please fix the following errors:\n\n";

        if (result.errors && Array.isArray(result.errors)) {
          result.errors.forEach((error) => {
            errorMessages[error.param] = error.msg;
            alertMessage += `- ${error.msg}\n`;
          });
        } else {
          alertMessage += "- Unexpected error occurred. Please try again.";
        }

        setErrors(errorMessages);
        alert(alertMessage);
      } else {
        alert("Form submitted successfully!");
        setFormData({
          leadLabel: "PRAXXII GLOBAL",
          fullName: "",
          phone: "",
          year: "",
          make: "",
          model: "",
          part: "",
          vin: "",
          email: "",
          zip: "",
          browser: detectBrowser(),
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <form className="custom-form" onSubmit={handleSubmit}>
        <h4 className="form-title">Contact info</h4>

        <label>Full Name*</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Your Name" />

        <label>Phone No.*</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Contact Number" />

        <h4 className="form-title">Part Details</h4>
        <div className="form-row part-details-row">
          <div className="form-col">
            <label>Year*</label>
            <select name="year" value={formData.year} onChange={handleChange} required>
              <option value=""></option>
              {years.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <div className="form-col">
            <label>Make*</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="make"
                placeholder="Select or type make"
                value={formData.make}
                onChange={(e) => {
                  handleChange(e);
                  setShowMakeDropdown(true);
                }}
                onFocus={() => setShowMakeDropdown(true)}
                onBlur={() => setTimeout(() => setShowMakeDropdown(false), 200)}
                required
              />
              {showMakeDropdown && filteredMakes.length > 0 && (
                <div className="dropdown">
                  {filteredMakes.map((make) => (
                    <div key={make} onMouseDown={() => handleSelectMake(make)} className="dropdown-item">
                      {make}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="form-col">
            <label>Model*</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="model"
                placeholder="Enter or select model"
                value={formData.model}
                onChange={(e) => {
                  handleChange(e);
                  if (formData.make) setShowModelDropdown(true);
                }}
                onFocus={() => {
                  if (formData.make) setShowModelDropdown(true);
                }}
                onBlur={() => setTimeout(() => setShowModelDropdown(false), 200)}
                disabled={!formData.make}
                required
              />
              {showModelDropdown && filteredModels.length > 0 && (
                <div className="dropdown">
                  {filteredModels.map((model) => (
                    <div key={model} onMouseDown={() => handleSelectModel(model)} className="dropdown-item">
                      {model}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="form-col">
          <label>Choose Part*</label>
          <select name="part" value={formData.part} onChange={handleChange} required>
            <option value="" disabled>Select part</option>
            {filteredParts.map((part, index) => (
              <option key={index} value={part}>{part}</option>
            ))}
          </select>
        </div>

        <div className="form-col">
          <label>VIN Number (Optional)</label>
          <input type="text" name="vin" value={formData.vin} onChange={handleChange} />
        </div>

        <div className="last-row">
          <div id="l-row">
            <label>Email*</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="email" required />
          </div>
          <div id="l-row">
            <label>Zip Code*</label>
            <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP" required />
          </div>
        </div>

        <input type="hidden" name="browser" value={formData.browser} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
