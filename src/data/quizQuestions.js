export const easyQuestions = [
  {
    id: 1,
    question: "What does 'phishing' refer to in cybersecurity?",
    options: [
      "A type of malware",
      "Fraudulent attempts to obtain sensitive information",
      "A firewall technology",
      "A network protocol"
    ],
    correctAnswer: 1,
    explanation: "Phishing is a fraudulent attempt to obtain sensitive information such as passwords or credit card details.",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "What is a strong password characteristic?",
    options: [
      "Using only lowercase letters",
      "Your birthdate",
      "A mix of letters, numbers, and special characters",
      "The word 'password'"
    ],
    correctAnswer: 2,
    explanation: "Strong passwords should contain a combination of uppercase and lowercase letters, numbers, and special characters to maximize security.",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "What does HTTPS stand for?",
    options: [
      "HyperText Transfer Protocol Secure",
      "High Transfer Packet Security",
      "Home Terminal Processing System",
      "Hardware Terminal Protection Standard"
    ],
    correctAnswer: 0,
    explanation: "HTTPS stands for HyperText Transfer Protocol Secure, which encrypts data sent between your browser and the website.",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "What is two-factor authentication (2FA)?",
    options: [
      "Using two passwords",
      "An additional security layer requiring two forms of verification",
      "Logging in twice",
      "A type of encryption"
    ],
    correctAnswer: 1,
    explanation: "Two-factor authentication adds an extra layer of security by requiring two different forms of verification to access an account.",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "What is malware?",
    options: [
      "Broken hardware",
      "Malicious software designed to harm computers",
      "A type of email",
      "Faulty code"
    ],
    correctAnswer: 1,
    explanation: "Malware is malicious software specifically designed to disrupt, damage, or gain unauthorized access to computer systems.",
    difficulty: "easy"
  }
];

export const hardQuestions = [
  {
    id: 51,
    question: "What is a zero-day exploit?",
    options: [
      "An attack that happens at midnight",
      "A vulnerability exploited before a patch is available",
      "An attack that takes zero days to execute",
      "A completely harmless security test"
    ],
    correctAnswer: 1,
    explanation: "A zero-day exploit is a cyber attack that occurs on the same day a weakness is discovered in software, before a patch is available.",
    difficulty: "hard"
  },
  {
    id: 52,
    question: "What does DNS spoofing accomplish?",
    options: [
      "Speeds up internet connection",
      "Redirects traffic to malicious sites by corrupting DNS data",
      "Encrypts DNS queries",
      "Blocks all DNS requests"
    ],
    correctAnswer: 1,
    explanation: "DNS spoofing corrupts the Domain Name System data to redirect users to malicious websites without their knowledge.",
    difficulty: "hard"
  },
  {
    id: 53,
    question: "What is the primary purpose of a honeypot in cybersecurity?",
    options: [
      "To store encrypted passwords",
      "To attract and monitor attackers",
      "To speed up network traffic",
      "To backup important data"
    ],
    correctAnswer: 1,
    explanation: "A honeypot is a decoy system designed to attract and monitor attackers, helping security teams understand attack methods.",
    difficulty: "hard"
  },
  {
    id: 54,
    question: "What is SQL injection?",
    options: [
      "A database backup method",
      "A code injection technique exploiting database vulnerabilities",
      "A type of encryption",
      "A network protocol"
    ],
    correctAnswer: 1,
    explanation: "SQL injection is a code injection technique that exploits vulnerabilities in an application's database layer by inserting malicious SQL statements.",
    difficulty: "hard"
  },
  {
    id: 55,
    question: "What does APT stand for in cybersecurity?",
    options: [
      "Automated Protection Technology",
      "Advanced Persistent Threat",
      "Application Programming Tool",
      "Active Protocol Testing"
    ],
    correctAnswer: 1,
    explanation: "APT stands for Advanced Persistent Threat - a prolonged and targeted cyberattack in which an intruder gains access to a network and remains undetected.",
    difficulty: "hard"
  }
];

// Generate more questions programmatically
for (let i = 6; i <= 50; i++) {
  easyQuestions.push({
    id: i,
    question: `Easy cybersecurity question #${i}?`,
    options: [
      "Share passwords with colleagues",
      "Use the same password everywhere",
      "Regular software updates and strong passwords",
      "Disable all security features"
    ],
    correctAnswer: 2,
    explanation: "Regular software updates and strong, unique passwords are fundamental security best practices.",
    difficulty: "easy"
  });
}

for (let i = 56; i <= 100; i++) {
  hardQuestions.push({
    id: i,
    question: `Advanced security question #${i}?`,
    options: [
      "Security through obscurity only",
      "Defense in depth with multiple security layers",
      "Single point of failure",
      "Open access by default"
    ],
    correctAnswer: 1,
    explanation: "Defense in depth implements multiple layers of security controls throughout an IT system for comprehensive protection.",
    difficulty: "hard"
  });
}