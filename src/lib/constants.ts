// src/lib/constants.ts

/**
 * Company contact information
 */
export const CONTACT = {
  EMAIL: "conplexus.llc@gmail.com",
  BUSINESS_HOURS: "Monday - Friday: 9:00 AM - 5:00 PM EST",
  RESPONSE_TIME: "1-2 business days",
} as const;

/**
 * Social media and external links
 */
export const LINKS = {
  GITHUB: "https://github.com/conplexus",
  LINKEDIN: "https://www.linkedin.com/company/conplexus",
} as const;

/**
 * Product and service information
 */
export const PRODUCTS = {
  CURRICULOGIC: {
    NAME: "CurricuLogic™",
    DESCRIPTION:
      "Curriculum mapping and accreditation alignment for institutions.",
  },
  CONPLEXUS_EDU: {
    NAME: "ConplexusEdu™",
    DESCRIPTION: "Educational solutions for curriculum and program management.",
  },
} as const;

/**
 * Site metadata
 */
export const SITE = {
  NAME: "Conplexus™",
  TAGLINE: "Connecting the Complexities between Us",
  DESCRIPTION:
    "Conplexus LLC delivers innovative software solutions for healthcare, education, and informatics. Specializing in curriculum mapping, accreditation management, and workflow automation.",
  URL: "https://conplexus.com",
  COPYRIGHT: "Conplexus™ LLC. All rights reserved.",
} as const;

/**
 * Validation patterns and rules
 */
export const VALIDATION = {
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 5000,
} as const;
