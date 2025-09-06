# GitFlow Workflow

## Branch Structure

- **main**: Production ready code
- **develop**: Integration branch for features
- **feature/***: New features (branch from develop)
- **release/***: Release preparation (branch from develop)
- **hotfix/***: Critical fixes (branch from main)

## Commands

### Start a new feature
```bash
git checkout develop
git pull origin develop
git checkout -b feature/feature-name
```

### Finish a feature
```bash
git checkout develop
git pull origin develop
git merge feature/feature-name
git branch -d feature/feature-name
git push origin develop
```

### Start a release
```bash
git checkout develop
git pull origin develop
git checkout -b release/v1.0.0
```

### Finish a release
```bash
git checkout main
git pull origin main
git merge release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git checkout develop
git merge release/v1.0.0
git branch -d release/v1.0.0
git push origin main develop --tags
```

### Start a hotfix
```bash
git checkout main
git pull origin main
git checkout -b hotfix/fix-name
```

### Finish a hotfix
```bash
git checkout main
git pull origin main
git merge hotfix/fix-name
git tag -a v1.0.1 -m "Hotfix version 1.0.1"
git checkout develop
git merge hotfix/fix-name
git branch -d hotfix/fix-name
git push origin main develop --tags
```