---
title: PRA Registry - Banque Nationale
description: Library of proven architectures to accelerate your projects with quality and consistency
---

# Welcome to the PRA Registry

## Don't reinvent the wheel, reuse what works

Starting a new project? Looking for the best way to implement authentication, CI/CD, or Salesforce integration? **The PRA Registry is your library of production-validated architectures.**

## What is a PRA?

A **PRA (Proven Reusable Architecture)** is a **proven solution** that has already demonstrated its value in real Banque Nationale projects.

```mermaid
graph LR
    A[Recurring problem] --> B[Documented solution]
    B --> C[Validated in prod]
    C --> D[Reusable]
    D --> E[PRA]
```

### 4 Key Points

✅ **Proven in production**: Validated in at least 3 real implementations at BNC
✅ **Reusable**: Generalizable to different contexts and projects
✅ **Documented**: With context, architectural decisions (ADRs), code examples and feedback
✅ **Maintained**: Versioned and supported by the BNC architecture community

### Simple Analogy

Think of PRAs as **proven recipes**:

- The recipe (the PRA) has been tested multiple times
- It works in different kitchens (contexts)
- It documents ingredients (tech stack), steps (implementation) and pitfalls to avoid
- You can adapt it to your taste (your context)

## Quick Start

### Are you a developer?

**Need: "I need to implement authentication"**

1. ➡️ Go to [Transversal > Security](/en/registre/transversal)
2. 🔍 Find the "Authentication & SSO" PRA
3. ✅ Check if your context matches
4. 📖 Follow the implementation guide
5. 📝 Document your feedback

### Are you an architect?

**Need: "I want to contribute a validated architecture"**

1. 📋 Review the [Quality Standards](/en/registre/05-standards)
2. 📝 Prepare your documentation (ADRs, examples, proven-in-use)
3. 📤 Follow the [Contribution Guide](/en/registre/06-contributing)
4. ✅ Submit your PRA to the Governance Board

### New to PRAs?

**Need: "I want to understand the PRA system"**

Follow our **8-step guided path**:

1. [Getting Started with PRAs](/en/registre/01-getting-started) - Introduction and first steps
2. [Understanding PRAs](/en/registre/02-understanding-pra) - Detailed anatomy
3. [Roles & Responsibilities](/en/registre/03-roles-responsibilities) - Who does what
4. [Lifecycle](/en/registre/04-lifecycle) - From Candidate to Approved
5. [Quality Standards](/en/registre/05-standards) - Excellence criteria
6. [Contributing a PRA](/en/registre/06-contributing) - Submission process
7. [Promotion Process](/en/registre/07-promotion-process) - Sectoral → Transversal
8. [Governance](/en/registre/08-governance) - Structure and decisions

## Registry Organization

The registry is organized into **3 scopes** based on their reach:

### 🌐 Transversal

**For whom?** All Banque Nationale sectors
**Maturity**: Validated by the Transversal Governance Board
**Examples**: SSO Authentication, CI/CD GitOps, API Gateway, RBAC/ABAC

➡️ [Explore Transversal PRAs](/en/registre/transversal)

### 🏢 Sectors

**For whom?** Teams from a specific sector (Retail, Business, Wealth Management)
**Maturity**: Validated in their sector, awaiting transversal promotion
**Examples**: Digital Onboarding (Retail), ERP SAP Integration (Business)

➡️ [Explore Sectoral PRAs](/en/registre/secteurs)

### 🚀 In Promotion

**For whom?** Everyone (under observation)
**Status**: Sectoral patterns proposed to become transversal
**Utility**: See emerging patterns before their generalization

➡️ [Explore PRAs in Promotion](/en/registre/en-promotion)

## PRA Categories

Regardless of scope, PRAs are organized into 4 categories:

### 🔧 Tech

Infrastructure and platform patterns

**Examples**: CI/CD, Observability (Prometheus/Grafana), Infrastructure as Code (Terraform), Orchestration (Kubernetes)

### 🔗 Integration

Inter-system integration patterns

**Examples**: API Gateway, Message Broker (Kafka/RabbitMQ), Event-Driven Architecture, Data Synchronization

### 🔒 Security

Security and compliance patterns

**Examples**: RBAC/ABAC, Secrets Management (Vault), Network Security (Zero Trust), Audit & Compliance

### 💼 Business

Reusable business patterns

**Examples**: Customer Onboarding, Payment Processing, Notification System, Workflow Orchestration

## Why Use PRAs?

### ⏱️ Time Savings

- No need to reinvent the wheel
- Ready-to-use solutions with code examples
- Documented feedback = fewer trial-and-error

**Concrete example**: Implement a CI/CD GitOps with ArgoCD in 2 days instead of 2 weeks of research and POC.

### ✅ Quality

- Solutions validated in real production
- Integrated best practices
- Common pitfalls documented and avoided

**Concrete example**: The "RBAC with CASL" PRA includes permission management edge cases you would have discovered after several bugs.

### 🎯 Consistency

- Architectural alignment between teams
- Common vocabulary (fewer misunderstandings)
- Shared standards (easier to maintain)

**Concrete example**: All projects use the same observability stack → a new architect can quickly understand any project.

### 📊 Measurable ROI

- **40-60% reduction** in architecture design time
- **+30%** code and component reuse
- **-50%** production incidents (thanks to documented learnings)

## Frequently Asked Questions

### Must I use a PRA?

**No.** PRAs are **recommendations**, not obligations.

**But**: If an applicable PRA exists and you don't use it, you'll need to justify why during architecture reviews (to avoid duplication of efforts).

### Can I adapt a PRA to my context?

**Yes, absolutely!** PRAs are **patterns**, not frozen code.

**Important**: Document your adaptations and share your learnings to enrich the PRA.

### How many PRAs are currently available?

The registry currently contains:
- **~15 Transversal PRAs** (validated for everyone)
- **~20 Sectoral PRAs** (sector-specific)
- **~5 PRAs in Promotion** (under transversal validation)

### How are PRAs validated?

Each PRA goes through a rigorous process:

1. **Submission** → Technical review by Governance Board
2. **Candidate** → Validated with 1+ proven-in-use
3. **Approved** → Validated with 3+ proven-in-use from different teams

[Learn more about the Lifecycle](/en/registre/04-lifecycle)

### Who decides if a sectoral PRA becomes transversal?

The **Transversal Governance Board** (5-7 senior cross-team architects).

[Learn more about Governance](/en/registre/08-governance)

## Next Steps

### In a hurry?

➡️ [Explore the Transversal catalogue](/en/registre/transversal) and find a PRA for your need

### Have 15 minutes?

➡️ Follow the [Getting Started Guide](/en/registre/01-getting-started) for a complete introduction

### Want to understand everything?

➡️ Go through the [8 numbered guides](/en/registre/01-getting-started) in order

## Need Help?

- **Teams Channel**: `#pra-registry`
- **Email**: pra-support@company.com
- **GitHub Issues**: [Open an issue](https://github.com/org/pra-registry/issues)
- **Governance Board**: pra-governance@company.com

---

**Last updated**: 2025-12-02
**Active contributors**: 45+ BNC architects
**Validated PRAs**: 40+ proven patterns
