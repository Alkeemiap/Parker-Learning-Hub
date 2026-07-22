/* =========================================================================
   THE PARKER LEARNING HUB — WEEKLY CONTENT
   =========================================================================
   THIS IS THE ONLY FILE YOU SHOULD EDIT EACH WEEK.
   Do not touch index.html, family.html, news.html, styles.css, or app.js —
   the site's look and the QR code link stay exactly the same; only the
   text below changes.

   HOW TO EDIT:
   - Replace the text between the "  " quote marks. Keep the quote marks.
   - Keep every comma. Each item in a list [ ... ] needs a comma after it
     except the very last one.
   - Save this file, then re-upload all six files together to your host
     (or replace just this file if your host lets you update one at a time).
   ========================================================================= */

const CONTENT = {

  // ---- Shown in the header/hero on every page ----
  meta: {
    teacherName: "Mr. Parker",
    school: "Katherine Johnson Global Academy",
    gradeSubject: "Grade 5 · English Language Arts",
    weekOf: "September 8, 2026",
    tagline: "Where families and school leaders stay connected to learning."
  },

  // ===================== PAGE 1: INSTRUCTIONAL BRIEF =====================
  brief: {
    moduleTitle: "Wit & Wisdom — Module 1: Stories of Immigration",
    essentialQuestion: "How do individual stories help us understand a larger historical experience?",
    lessonsThisWeek: [
      "Lesson 6: Analyzing character motivation",
      "Lesson 7: Identifying textual evidence",
      "Lesson 8: Comparing two accounts of the same event",
      "Lesson 9: Vocabulary in context",
      "Lesson 10: Socratic Seminar preparation"
    ],
    textsThisWeek: [
      "\u201CAngel Island\u201D — informational text",
      "Excerpt from Dragonwings by Laurence Yep"
    ],

    today: {
      lesson: "Lesson 8: Comparing Two Accounts of the Same Event",
      learningTarget: "I can compare how two authors present information on the same topic.",
      standards: "MSDE College & Career Readiness Standards RI.5.6, RI.5.9",
      successCriteria: [
        "Read closely to understand complex text.",
        "Annotate important information while reading.",
        "Cite evidence from the text.",
        "Explain how evidence supports their thinking.",
        "Participate in meaningful academic discussion.",
        "Complete today's Exit Ticket independently."
      ]
    },

    exitTicket: [
      "How do the two texts differ in their point of view on Angel Island?",
      "Cite one piece of evidence from each text to support your answer."
    ],

    visitorsShouldSee: [
      "Reading grade-level complex text",
      "Annotating while reading",
      "Discussing ideas using academic language",
      "Citing evidence from the text",
      "Writing evidence-based responses",
      "Collaborating with peers",
      "Working independently",
      "Receiving teacher feedback"
    ],

    stations: [
      { name: "Complex Text Station", icon: "book", tasks: [
        "Read grade-level complex text.", "Annotate important details.",
        "Answer text-dependent questions.", "Defend answers using textual evidence." ] },
      { name: "Writing Practice Station", icon: "pencil", tasks: [
        "Respond to a writing prompt.", "Use the RACE strategy.",
        "Cite textual evidence.", "Revise writing for clarity and accuracy." ] },
      { name: "Vocabulary Station", icon: "chat", tasks: [
        "Learn academic vocabulary.", "Determine word meanings using context clues.",
        "Practice vocabulary through discussion and application.", "Use new vocabulary in speaking and writing." ] },
      { name: "Technology Station", icon: "monitor", tasks: [
        "Complete today's assigned digital learning activity.", "Practice reading skills.",
        "Demonstrate independent learning." ] },
      { name: "Teacher Small Group", icon: "users", tasks: [
        "Receive targeted instruction.", "Receive immediate feedback.",
        "Strengthen understanding through guided practice." ] }
    ],

    // today / weeklyAverage / goal are all whole numbers, 0-100
    attendance: { goal: 90, today: 94, weeklyAverage: 91 }
  },

  // ===================== PAGE 2: FAMILY CONNECTION =====================
  family: {
    message: "Welcome to another exciting week of learning! This week, students will continue building their reading comprehension and writing skills through our Wit & Wisdom lessons. Ask your child what they learned today and encourage them to read for at least 20 minutes each evening. Thank you for your continued partnership in your child's success!",

    thisWeek: {
      module: "Wit & Wisdom — Module 1: Stories of Immigration",
      lesson: "Comparing two accounts of the same event",
      essentialQuestion: "How do individual stories help us understand a larger historical experience?",
      learningTarget: "I can compare how two authors present information on the same topic."
    },

    conversationStarters: [
      "What story or article did you read today?",
      "What evidence supported your answer?",
      "What new vocabulary did you learn?",
      "What was today's learning target?",
      "What was today's exit ticket?"
    ],

    vocabulary: [
      { word: "Perspective", meaning: "A particular way of viewing or thinking about something." },
      { word: "Evidence", meaning: "Facts or details that support an idea." },
      { word: "Migration", meaning: "Movement from one place to live in another." },
      { word: "Analyze", meaning: "To study something closely in order to understand it." },
      { word: "Perseverance", meaning: "Continuing to try even when something is difficult." }
    ],

    readingAtHome: {
      minutes: 20,
      questions: [
        "What happened?",
        "Why did it happen?",
        "What evidence supports your thinking?",
        "What lesson did the author want readers to learn?"
      ]
    },

    important: {
      homework: ["Reading log due Friday", "Vocabulary practice sheet due Wednesday"],
      projects: ["Immigration Story Project — due September 22"],
      assessments: ["Module 1 Checkpoint — September 19"],
      fieldTrips: ["Library visit — September 25"],
      events: ["Curriculum Night — September 17, 6:00 PM"],
      spiritDays: ["College Colors Day — September 12"],
      reminders: ["Please label all folders and books with your child's name."]
    },

    celebrations: [
      { icon: "star", text: "Student of the Week: [add name]" },
      { icon: "check-circle", text: "Attendance goal met this week — thank you, families!" },
      { icon: "trending-up", text: "Reading growth: class average up this month" },
      { icon: "award", text: "Module 1 completed — great work, readers!" }
    ],

    // set href to "mailto:you@yourschool.org" or a real link; use "#" as a placeholder
    resources: [
      { label: "Email Mr. Parker", icon: "mail", href: "mailto:parker@example.edu" },
      { label: "School Website", icon: "globe", href: "#" },
      { label: "School Calendar", icon: "calendar", href: "#" },
      { label: "Weekly Newsletter", icon: "clipboard", href: "#" },
      { label: "District Family Resources", icon: "users", href: "#" },
      { label: "Classroom Wish List", icon: "star", href: "#" },
      { label: "Volunteer Opportunities", icon: "heart", href: "#" }
    ]
  },

  // ===================== PAGE 3: CLASSROOM NEWS =====================
  news: {
    newsletter: {
      title: "Week 4 Newsletter",
      body: "This week we wrapped up our study of Angel Island and began comparing two authors' perspectives on the same event. Thank you to every family who joined our reading circle event — it was wonderful to see so many of you!"
    },

    events: [
      { date: "Sep 17", title: "Curriculum Night", detail: "6:00 PM in the cafeteria" },
      { date: "Sep 22", title: "Immigration Story Project due", detail: "Presentations begin in class" },
      { date: "Sep 25", title: "Library visit", detail: "Please send a labeled book bag" }
    ],

    announcements: [
      "Picture day has been rescheduled to October 2.",
      "Please send a labeled water bottle with your child each day."
    ],

    // Add real file paths once photos are taken, e.g. "images/anchor-chart-1.jpg".
    // Leave the list empty ([]) to show a placeholder card instead.
    photos: {
      anchorCharts: [],
      studentWork: [],   // names removed from all student work before photographing
      stations: []
    },

    fieldTrip: {
      title: "Library Visit",
      date: "September 25",
      detail: "Students will visit the public library to select independent reading books. Permission slips are due September 20."
    },

    readingChallenge: {
      goalBooks: 20,
      booksReadSoFar: 12,
      note: "Every book our class finishes moves our reading rocket closer to the moon!"
    }
  }
};
