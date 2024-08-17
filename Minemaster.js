{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('usage-form').addEventListener('submit', function(event) \{\
    event.preventDefault();\
    \
    const machineId = document.getElementById('machine-id').value;\
    const startHours = document.getElementById('start-hours').value;\
    const endHours = document.getElementById('end-hours').value;\
    \
    const usageOutput = document.getElementById('usage-output');\
    usageOutput.innerHTML = `<p>Machine ID: $\{machineId\}</p><p>Start Hours: $\{startHours\}</p><p>End Hours: $\{endHours\}</p><p>Total Hours Worked: $\{endHours - startHours\}</p>`;\
    \
    document.getElementById('usage-form').reset();\
\});\
\
document.getElementById('issue-form').addEventListener('submit', function(event) \{\
    event.preventDefault();\
    \
    const issueDescription = document.getElementById('issue-description').value;\
    const issueSeverity = document.getElementById('issue-severity').value;\
    \
    const issueOutput = document.getElementById('issue-output');\
    issueOutput.innerHTML = `<p>Issue: $\{issueDescription\}</p><p>Severity: $\{issueSeverity\}</p>`;\
    \
    document.getElementById('issue-form').reset();\
\});\
}