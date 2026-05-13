---
id: intro
title: Introduction to Perf Agent
sidebar_position: 1
slug: /
---

# Waynautic AI Perf Agent

Perf Agent is an intelligent performance testing platform built by Waynautic. It automates the most time-consuming parts of the performance engineering lifecycle — from generating test scripts to executing tests, analysing results, and defining the non-functional requirements that guide your entire performance strategy.

Rather than stitching together separate tools, Perf Agent brings everything into one connected workspace. Teams working across BlazeMeter, GitHub, Azure DevOps, Jira, and Datadog can integrate all of them into Perf Agent and operate from a single interface.

![Perf Agent landing page showing the four component cards — AutoScript, Auto Analysis, NFR Strategy Hub, and Governance](/img/Main-Page.png)

---

## The Four Components

### ⚡ Auto Script

Auto Script generates a fully structured JMeter script (`.jmx` file) from two browser-recorded HAR files. Both HAR files are required — they capture the same user flow and together give Auto Script the data it needs to detect and correlate dynamic values accurately.

You select your application, upload both HAR files, and Auto Script handles correlation detection, timers, assertions, and parameterization. The generated script is a strong starting point — we recommend reviewing the correlation rules and adding any additional configuration (such as CSV Data Set configs, custom headers, or environment-specific parameters) before executing at scale in JMeter or BlazeMeter.

→ [Get started with Auto Script](/auto-script/)

---

### 📊 Auto Analysis

Auto Analysis manages the full test execution and reporting cycle. Upload your JMX to BlazeMeter, trigger runs through a connected GitHub or Azure DevOps pipeline, monitor results inside Perf Agent, and automatically send result reports to stakeholders by email — all from one place.

You configure each application once — linking a JMX script, a GitHub repository, and your load parameters — and Auto Analysis handles workflow creation, BlazeMeter orchestration, and post-run reporting automatically.

→ [Get started with Auto Analysis](/auto-analysis/)

---

### 📋 NFR Strategy Hub

The NFR Strategy Hub uses AI to generate a complete Non-Functional Requirements strategy for your application. It defines your SLAs, workload model, recommended test types, and performance thresholds — giving your team a documented baseline before testing begins.

→ [Get started with NFR Strategy Hub](/auto-NFR/)

---

### 🛡️ Governance *(Work in Progress)*

Governance is the ROI and compliance monitoring layer within Perf Agent. It tracks the value your automation delivers across all four platform components and surfaces efficiency metrics, token usage, and cost savings in one centralised dashboard.

Rather than manually tallying how much time or money your performance testing automation saves, Governance calculates it continuously from real platform activity — scripts generated, test runs executed, NFR strategies produced, and AI interactions completed.

**The Governance Dashboard tracks:**

| Metric | What it measures |
|---|---|
| **Total Time Saved** | Cumulative hours saved across all automated platform activity |
| **Manual Effort Reduction** | Percentage reduction versus a fully manual performance engineering baseline |
| **Cost Savings** | Dollar value of time saved, derived from an assumed engineering hourly rate |
| **Automation Coverage** | Percentage of testing activity automated through Perf Agent |
| **Return on Investment** | Total value generated relative to the estimated cost of platform usage |
| **Productivity Improvement** | Team throughput improvement enabled by automation across all components |

In addition to KPI cards, the dashboard includes **Time Savings Trend** and **Cost Savings Over Time** charts — showing month-on-month accumulation of savings as platform usage grows — and an **LLM Usage** section that breaks down token consumption and AI cost by model.

:::note
A future release of Governance will add **NFR compliance monitoring** — tracking whether builds across your test pipelines are meeting the SLA thresholds defined in the NFR Strategy Hub, and flagging breaches across releases and environments.
:::

→ [Get started with Governance](/governance/)

---

## The AI Chatbot

Every screen in Perf Agent includes a built-in AI chatbot. It can answer questions about your test build results, observations surfaced by Auto Analysis, your NFR thresholds and strategy, and how to use Auto Script. It has full context of what you are working on at any point in the platform.

→ [Learn more about the AI Chatbot](/chatbot/)
---

## How It All Fits Together

```
Record HAR (×2)
      ↓
  Auto Script  ──→  Generate JMX script
      ↓
 Auto Analysis ──→  Upload to BlazeMeter / Trigger Pipeline
                    Monitor Results → Email Report to Stakeholders
      ↓
NFR Strategy Hub ──→  Define SLAs, Workload Model, Thresholds
      ↓
  Governance   ──→  Monitor compliance across pipelines
```

Each component can be used independently, but together they cover the complete performance testing lifecycle from recording to reporting.

---

## Global Settings

Perf Agent has a settings layer that applies across all four components. Access it from the settings icon in the top-right corner.

![Settings page showing the left-hand navigation with Applications, Integrations, Profile, and AI Settings sections](/img/Profile-Page.png)

| Setting | What it controls |
|---|---|
| **Applications** | Add and manage the applications in your project. Applications added here appear in dropdowns across Auto Script, Auto Analysis, and NFR Strategy Hub. |
| **Integrations** | Connect external tools globally — GitHub, Azure DevOps, BlazeMeter, Jira, and Datadog. Once configured, these integrations are available to all components. |
| **AI Settings** | Configure the AI models that power the Chatbot. |
| **Profile** | Manage your user account details. |

→ [View Settings documentation](/settings/)

---

## Where to Start

If you are new to Perf Agent, start with the [Auto Script Quick Start Guide](/auto-script/auto-script). It is the entry point for most performance testing workflows and the fastest way to get hands-on with the platform.
---

## Product Videos

Use these local video embeds across sections. Files should exist under `static/videos`.

### Auto Script

<div class="doc-video-block">
  <video controls preload="metadata">
    <source src="videos/Auto-Script.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p class="doc-video-caption">Auto Script walkthrough video.</p>
</div>

### Auto Analysis

<div class="doc-video-block">
  <video controls preload="metadata">
    <source src="videos/Auto_Analysis.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p class="doc-video-caption">Auto Analysis overview and flow.</p>
</div>

### Auto NFR

<div class="doc-video-block">
  <video controls preload="metadata">
    <source src="videos/Auto-NFR.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p class="doc-video-caption">NFR strategy generation and setup.</p>
</div>

### Governance

<div class="doc-video-block">
  <video controls preload="metadata">
    <source src="videos/Governance.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p class="doc-video-caption">Governance monitoring and compliance.</p>
</div>

### AI Chatbot

<div class="doc-video-block">
  <video controls preload="metadata">
    <source src="videos/Chat-Bot.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <p class="doc-video-caption">Built-in assistant and contextual help.</p>
</div>


