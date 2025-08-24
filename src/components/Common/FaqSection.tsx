"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from "next/image";

const FaqSection: React.FC = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div className="faq-area-two ptb-100">
        <div className="faq-shape">
          <Image
            src="/images/faq-shape1.png"
            alt="Faq"
            width={303}
            height={330}
          />
          <Image
            src="/images/faq-shape2.png"
            alt="Faq"
            width={470}
            height={478}
          />
        </div>

        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked & Queastions</h2>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div
                className="faq-img"
                style={{ backgroundImage: `url(/images/faq-main.jpg)` }}
              >
                <Image
                  src="/images/faq-main.jpg"
                  alt="Faq"
                  width={750}
                  height={500}
                />

                <div
                  onClick={() => setToggler(!toggler)}
                  className="popup-youtube"
                >
                  <i className="icofont-ui-play"></i>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <Accordion allowZeroExpanded preExpanded={["a"]}>
                <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>What is the source of the virus?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Coronaviruses are a large family of viruses. Some cause
                      illness in people, and others, such as canine and feline
                      coronaviruses, only infect animals. Rarely, animal
                      coronaviruses that infect animals have emerged to infect
                      people and can spread between people
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="b">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>How does the virus spread?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Coronaviruses are a large family of viruses. Some cause
                      illness in people, and others, such as canine and feline
                      coronaviruses, only infect animals. Rarely, animal
                      coronaviruses that infect animals have emerged to infect
                      people and can spread between people
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="c">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>
                        Who has had COVID-19 spread the illness to others?
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Coronaviruses are a large family of viruses. Some cause
                      illness in people, and others, such as canine and feline
                      coronaviruses, only infect animals. Rarely, animal
                      coronaviruses that infect animals have emerged to infect
                      people and can spread between people
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="d">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>
                        Will warm weather stop the outbreak of COVID-19?
                      </span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Coronaviruses are a large family of viruses. Some cause
                      illness in people, and others, such as canine and feline
                      coronaviruses, only infect animals. Rarely, animal
                      coronaviruses that infect animals have emerged to infect
                      people and can spread between people
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="e">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <span>What is community spread?</span>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Coronaviruses are a large family of viruses. Some cause
                      illness in people, and others, such as canine and feline
                      coronaviruses, only infect animals. Rarely, animal
                      coronaviruses that infect animals have emerged to infect
                      people and can spread between people
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
