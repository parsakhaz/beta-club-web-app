# **Gen Z VCs Beta Club**

A simple way for students to get exposure to founding teams &amp; opportunities by contributing their knowledge. A platform where VCs and students can interact and make connections.

# The Mission

To serve as a platform that enables students to have a more niche and relevant profile available for them in their job hunt, by providing them **exposure and credibility** to VC firms and building a demonstrated track record in VC interest and **thought leadership**.

# Students

Students apart of the Gen Z Cohort are able to choose in advance what categories they're interested in, and are given related questions from various firms. The students can then choose which to answer, and if they are selected as the top answer are given a $25 giftcard/digital voucher & recognition in their profiles as being the top asnwer for that question in the form of stars. 

The more stars you have under a given category, the more likely you are to have VCs reach out to you. Student's profiles would display their email, relevant social media platforms (linkedin, medium, personal portfolio, substack, and the like) & stars.

# VCs

Gen Z VC partners would be able to seek feedback from Gen Z by submitting questions under a pre-defined categories. Our goal is to provide better access to a younger demographic and argueable the generation that will shape our futures, and a pipeline of potential hires.

**Example Categories**
- D2C
- Beauty
- AI/ML
- PropTech
- BioTech
- etc...

# User Stories

|Priority|User|Description|Technical Implementation| 
|--------|----|-----------|------------------------|
|P0|As a user|I want to be able to login with Google|Google Authentication|
|P0|As a user|I want to be able to set up my public profile| Forms, public facing user profile with relevant user information (resume, interests, experiences, projects), list of answered questions/top answers | 
|P0|As a user|I want to be able to answer questions| List of questions available to answer, sorted by category | 
|P0|As a VC|I want to be able to set up my profile| Forms, visibility, public, user information (what I'm looking for, list of posted questions) | 
|P0|As a VC |I want to be able to post questions| Question submission form | 

# Features

## MVP (Currently being worked on...)
- As a student: ability to answer questions and have VCs rank answers
- As a VC: ability to publish questions and receive answers
- Sort questions by category
- Public/private profile setup (# of questions answered/asked, # of top answers/amount of money gifted)

## In the future...
- Content moderation
- Protection from vulnerabilities (SQL injection, XCSS, etc)
- Search & filtering for question exploration

# Software Architecture & Tech

[Latest Version of Diagram](https://drive.google.com/file/d/1Ws0SoNMrq2lY5mLTfs8fDZXjweX5fkO6/view?usp=sharing)

**Hosting:** Vercel

**Frameworks:** NextJS, TailwindCSS

**Other:** React Forms/Formik, Firebase Auth

# Potential API Endpoints & Data Flow

**/example**
POST: Sign in 

# Database Schemas (MongoDB)
**User**
- ID
- Name (Last, First)
- Username
- ResumeLink (String)
- PortfolioLink (Link to portfolio)

**Questions**
- ID
- Content (String)
- DatePosted (Date)
- Category (String)

**Answers**
- ID
- Content (String)
- Upvotes
- DatePosted (Date)
