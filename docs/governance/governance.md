---
id: governance
title: Governance
sidebar_label: Governance
sidebar_position: 4
slug: /governance/
---

# Governance

Governance is the performance compliance monitoring layer within Perf Agent. It tracks the value your automation delivers across all four platform components - Auto Script, Auto Analysis, and NFR Strategy Hub - and surfaces ROI metrics, token usage, and cost efficiency in one centralised dashboard.

Rather than manually tallying how much time or money your performance testing automation saves, Governance calculates it continuously from real activity across the platform: scripts generated, test runs executed, NFR strategies produced, and AI interactions completed.

---

## Prerequisites

Governance is available to all Perf Agent users. No additional integration or configuration is required - it begins tracking automatically once you start using Auto Script, Auto Analysis, or NFR Strategy Hub.

---

## The Governance Dashboard

The dashboard is divided into three sections: KPI Cards, Trend Charts, and LLM Usage.

### KPI Cards

The top row of the dashboard shows six headline metrics calculated from your platform activity.

| Metric | What It Measures |
|---|---|
| Total Time Saved | Cumulative hours saved by using Auto Script, Auto Analysis, and NFR Strategy Hub instead of performing equivalent tasks manually |
| Manual Effort Reduction | Percentage reduction in manual effort compared to a baseline of fully manual performance engineering work |
| Cost Savings | Dollar value of time saved, calculated from an assumed average engineering hourly rate |
| Automation Coverage | Percentage of performance testing activity that was automated through Perf Agent rather than performed manually |
| Return on Investment | ROI percentage - total value generated relative to the estimated cost of using the platform |
| Productivity Improvement | Percentage improvement in team throughput enabled by the automation across all components |

Each KPI card shows a trend indicator - the delta compared to the previous period. A 0% delta means the metric has not changed since the last calculation period. As your team uses the platform more actively, these metrics accumulate.

---

## Trend Charts

Two charts visualise how savings are accumulating over time.

### Time Savings Trend

The Time Savings Trend chart plots hours saved per month across the tracked period. The x-axis shows months (November through April in the current view) and the y-axis shows cumulative hours saved.

The steep rise toward the most recent month reflects accelerating usage of Auto Script and Auto Analysis - as more scripts are generated and test runs are executed, the time saved compounds.

### Cost Savings Over Time

The Cost Savings Over Time chart plots dollar savings per month over the same period. It follows the same shape as the Time Savings Trend but scales the savings to a monetary value.

The sharp increase in March-April reflects when the team began using Auto Analysis and Auto Script at scale. Earlier months (November through February) show near-zero values because the platform was not yet in active use.

---

## LLM Usage

The bottom section of the dashboard breaks down AI consumption across the platform.

### Model Selector

The dropdown (currently showing `gpt-4o-mini`) lets you filter LLM usage metrics by model. If multiple AI models have been configured under `Settings -> AI Settings`, you can switch between them to compare token consumption and cost by model.

### LLM Metrics

| Metric | Description |
|---|---|
| LLM Tokens Used | Total number of tokens consumed across all AI-powered operations on the platform - NFR generation, Auto Analysis observations, and chatbot interactions |
| LLM Cost Used | Total cost of token consumption in INR (Rs), based on the per-token pricing of the selected model |

These metrics help engineering leads and platform administrators understand how AI usage scales with platform adoption and manage spend accordingly.

---

## How Savings Are Calculated

Governance derives its KPIs from a set of assumptions about the manual time equivalent for each platform activity.

| Activity | Manual Equivalent Assumed |
|---|---|
| Auto Script - JMX generated | Time to manually write, correlate, and structure a JMeter script from a HAR recording |
| Auto Analysis - Test run configured and executed | Time to manually upload a script to BlazeMeter, configure a CI pipeline, monitor results, and produce a report |
| NFR Strategy Hub - Strategy generated | Time to manually research, draft, and review a full Non-Functional Requirements strategy document |
| AI Chatbot - Query answered | Time saved by getting an instant, contextual answer rather than manually cross-referencing documentation or build results |

The dollar value of time saved is derived from an estimated average engineering hourly rate. This assumption can be reviewed with your Perf Agent account team if you want to calibrate it to your organisation's actual rates.

---

## Interpreting the Metrics

A 0% trend on all cards means you are looking at the first tracked period - there is no prior period to compare against yet. As your team continues to use the platform, trends will begin to reflect genuine period-over-period changes.

Automation Coverage below 100% reflects that some performance testing activity (such as running scripts locally in JMeter, or manual analysis work outside Perf Agent) is still happening outside the platform. As more of the testing lifecycle moves into Perf Agent, this figure will rise.

ROI above 100% means the platform is generating more value in time savings than the estimated cost of operating it - which is the expected steady state once Auto Script and Auto Analysis are in regular use.

---

## What to Do Next

Share the dashboard with your engineering manager or project sponsor as evidence of automation value. The KPI figures provide a quantified view of what performance engineering automation is delivering.

Monitor LLM spend by checking the LLM Usage section regularly, especially if your team is generating NFR strategies or using the AI chatbot heavily. Switch between models in the selector to compare cost efficiency.

Drive Automation Coverage higher by ensuring all performance testing workflows run through Auto Analysis rather than being triggered manually outside Perf Agent.

Return after each sprint or release cycle to see how the trend charts evolve - steady month-on-month growth in time and cost savings is the expected pattern as platform usage matures.
