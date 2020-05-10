import React, { useState, useEffect, useMemo } from "react";
import "./Funnel.css";
import { RightCircleOutlined, CaretRightOutlined } from "@ant-design/icons";
import { cityState } from "../data/cityState";
import { createItem } from "../helpers/aws/updateDynamodb";

const array = [
  "Choose an option--",
  "All",
  "Residential: Single Family",
  "Residential: Townhouse",
  "Residential: Multi-Family",
  "Residential: Duplex",
  "Residential: Triplex",
  "Residential: Apartment",
  "Residential: Quad",
  "Commercial",
];


function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  window.gtag('event', 'conversion', {
      'send_to': 'AW-835328739/lcSjCNCK8s8BEOO1qI4D',
      'event_callback': callback
  });
  return false;
}


const Funnel = (props) => {
  let [state, setState] = useState({
    height: 0,
    suggestions: [],
    hide: false,
    formData: {
      name: "",
      market: "",
      propType: "",
      email: "",
    },
    formSubmitted: false,
  });

  useEffect(() => {
    let item = document.querySelector(".acs-itms");
    let height = item ? item.scrollHeight : 0;
    let formSubmitted = false;
    let submitStatus = localStorage.getItem('submitted')

    if(submitStatus === 'true'){
      formSubmitted = true;
    }

    setState({ ...state, height, formSubmitted });
  }, []);

  let getSuggestions = (e) => {
    let text = e.target.value;
    let l = text.split("")[0];
    let suggestions = cityState[l]
      ? cityState[l].filter((word) => word.includes(text))
      : [];

    setState({
      ...state,
      suggestions,
    });
    return suggestions;
  };

  let updateValues = (e) => {
    e.stopPropagation();
    e.preventDefault();
    let value = e.target.value ? e.target.value : e.target.innerText;
    /* console.log(e.target.value ? e.target.value : e.target.innerText)
    console.log(e.target.id) */
    let formData = { ...state.formData, [e.target.id]: value };

   
    setState({
      ...state,
      formData,
    });
  };
  let formIsFull = () => {
    let { name, market, propType, email } = state.formData;

    return name && market && propType && email;
  };

  let submitItem = () => {
    createItem(state.formData);
    setState({ ...state, formSubmitted: true });
    localStorage.setItem('submitted', true)
    gtag_report_conversion()
  };

  return (
    <>
      <div className="pg-sec">
        <nav className="fnl-nv">
          <div className="v-container">
            <div className="box"></div>
            <div className="ot-box"></div>
            <div className="v-txt">
              <span className="ot-txt">VIZIER </span>
              <span className="md-txt">ESTATE </span>
              <span className="ot-txt">GROUP </span>
            </div>
          </div>
        </nav>
        <div className="bg-opaque">
          <div className="v-header">
            <div className="hdr-ctr">
              {" "}
              <div className="rgs-ctr">
                <CaretRightOutlined />
                <span className="register"> REGISTER </span>
              </div>
              &nbsp;WITH VIZIER.{" "}
            </div>

            <div className="hdr-ctr bg">
              <span className="stabilize">&nbsp;FORTIFY</span>
              &nbsp;YOUR EMPIRE.
            </div>
          </div>
          <div className="btm">
            {!state.formSubmitted ? (
              <>
                <div className="btm-sec">
                  <div className="acs-ctr">
                    <h1 className="acs-hdr">
                      RESERVE ACCESS <span>NOW</span>
                    </h1>
                    <div className="acs-spt">
                      <span>23</span>&nbsp;SPOTS REMAINING
                    </div>
                    <div className="acs-dsc">
                      Expand your reach with a customized digital purchasing
                      pipeline optimized for making quick and informed
                      decisions.
                    </div>
                    <div className="acs-lst">
                      <div className="acs-side">
                        <div className="l-bar"></div>
                        <div className="r-bar">
                          <div className="i-bar"></div>
                        </div>
                      </div>
                      <div className="acs-itms">
                        <div className="acs-itm">
                          <div className="acs-icon">
                            <RightCircleOutlined />
                          </div>
                          {" VIRTUAL TOURS "}
                        </div>
                        <div className="acs-itm">
                          <div className="acs-icon">
                            <RightCircleOutlined />
                          </div>
                          SECURE DIGITAL CLOSINGS ($15-20K PER DEAL){" "}
                          <span style={{ fontSize: "10px" }}>&nbsp;</span>
                        </div>
                        <div className="acs-itm">
                          <div className="acs-icon">
                            <RightCircleOutlined />
                          </div>
                          {" ADVANCED PROPERTY LISTING UPDATES"}
                        </div>
                        <div className="acs-itm">
                          <div className="acs-icon">
                            <RightCircleOutlined />
                          </div>
                          {" CUSTOM SERVICES & TOOLS BUILT FOR YOU"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btm-sec">
                  <div className="acs-ctr r">
                    <h1 className="acs-hdr2">
                      <span>EXCLUSIVE</span>
                      <br />
                      CASH BUYER DEALS IN YOUR INBOX
                    </h1>
                    <div className="mr-inf">
                      SIGN UP NOW FOR MORE INFORMATION
                    </div>
                    <form
                      className="form"
                      
                      onClick={(e) => {
                        if (e.target.id !== "zone") {
                          document
                            .querySelector(".suggestions-ctr")
                            .classList.add("hidden");
                        }
                      }}
                    >
                      <div className="input-ctr">
                        <div for="name" className="titles">
                          FULL NAME
                        </div>
                        <div className="input">
                          <input
                            type="text"
                            id="name"
                            onKeyUp={updateValues}
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="input-ctr">
                        <div className="titles">TARGET MARKET</div>
                        <LocInput
                          updateValues={updateValues}
                          suggestions={state.suggestions}
                          getSuggestions={getSuggestions}
                        />
                      </div>
                      <div className="input-ctr">
                        <div for="prop-types" className="titles">
                          PROPERTY TYPE
                        </div>
                        <div className="input">
                          {" "}
                          <select
                            onMouseUp={updateValues}
                            name="prop-types"
                            id="propType"
                          >
                            {array.map((option) => {
                              return <option id={option}>{option}</option>;
                            })}
                          </select>
                        </div>
                      </div>
                      <div className="input-ctr">
                        <div for="email" className="titles">
                          EMAIL
                        </div>
                        <div className="input">
                          <input
                            type="email"
                            onKeyUp={updateValues}
                            id="email"
                            name="email"
                          />
                        </div>
                      </div>

                      <div className="submit-ctr">
                        <div
                          onClick={submitItem}
                          className={`submit ${
                            formIsFull() ? "" : "inactive"
                          } `}
                        >
                          SUBMIT
                        </div>
                      </div>
                    </form>
                  </div>
                </div>{" "}
              </>
            ) : (
              <div className="ty-sbt">
                <h1 className="ty-hdr">Thank You for Registering!</h1>
                <p className="ty-txt">
                  {" "}
                  Keep an eye on your inbox for more information about our
                  services and exclusive property deals targeting your area.
                  <br/>
                  <br/>
                  We look forward to working with you!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Funnel;

const LocInput = ({ suggestions, getSuggestions, updateValues }) => {
  let [state2, setState] = useState({
    suggestions: [],
    height: 0,
    hide: false,
  });

  useEffect(() => {
    let height = document.querySelector("#market").scrollHeight;
    setState({ ...state2, height, suggestions, hide: false });
  }, []);

  useMemo(() => {
    let zone = document.querySelector("#market");

    /* document.addEventListener('focusout', (e)=>{
      console.log('Event', e)
      setState({...state2, hide: true})
    }) */
  }, []);

  let display = (e) => {
    e.stopPropagation();
    setState({
      ...state2,
      suggestions: getSuggestions(e),
      hide: false,
    });
  };

  let switchValue = (e) => {
    let zone = document.querySelector("#market");

    zone.value = e.target.innerText;
  };

  let blur = (e) => {
    e.stopPropagation();

    setState({ ...state2, hide: true });
  };

  return (
    <div className="input">
      <input
        type="text"
        autoComplete="new-password"
        onChange={display}
        placeholder=" City, State OR State"
        id="market"
        name="zone"
        onKeyUp={updateValues}
      />
      <div
        className={`suggestions-ctr ${
          state2.suggestions.length && !state2.hide ? "" : "hidden"
        }`}
        style={{ height: state2.height * 4 }}
      >
        {state2.suggestions.length
          ? state2.suggestions.map((suggestion) => {
              return (
                <div
                  className="option"
                  id="market"
                  onMouseUp={updateValues}
                  onClick={switchValue}
                >
                  {suggestion}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
