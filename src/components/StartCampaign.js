import React, { useState } from "react";
import axios from "axios";
import "./StartCampaign.css";

const StartCampaign = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
    duration: "",
    category: "",
    banner: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, banner: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const campaignData = new FormData();
    Object.keys(formData).forEach((key) => {
      campaignData.append(key, formData[key]);
    });

    try {
      const response = await axios.post("/api/create-campaign", campaignData);
      if (response.status === 200) {
        alert("Campaign created successfully!");
      }
    } catch (error) {
      console.error("Error creating campaign:", error);
      alert("Failed to create campaign.");
    }
  };

  return (
    <div className="start-campaign">
      <h1>Start a Campaign</h1>
      <form onSubmit={handleSubmit} className="campaign-form">
        <input
          type="text"
          name="title"
          placeholder="Campaign Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Campaign Description"
          value={formData.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <input
          type="number"
          name="goal"
          placeholder="Funding Goal ($)"
          value={formData.goal}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (days)"
          value={formData.duration}
          onChange={handleInputChange}
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Category</option>
          <option value="Health">Health</option>
          <option value="Education">Education</option>
          <option value="Environment">Environment</option>
        </select>
        <input type="file" name="banner" onChange={handleFileChange} required />
        <button type="submit" className="btn-submit">
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default StartCampaign;
