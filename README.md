# The Reconnector — Édition Couples

Site vitrine React présentant un jeu de cartes islamique pour couples, pensé pour nourrir le dialogue, la spiritualité et les moments de qualité à deux.

## Démarrage local

```bash
pnpm install
pnpm dev
```

Pour construire la version de production :

```bash
pnpm build
```

## Ressources incluses

Les images, les photographies source, le symbole de marque et les polices utilisées par l’interface sont versionnés dans le dépôt. Consulter [`assets/ASSET_MANIFEST.md`](assets/ASSET_MANIFEST.md) pour le détail.

## Structure

| Dossier | Rôle |
|---|---|
| `client/` | Application React et styles. |
| `client/public/assets/` | Images et polices locales utilisées par le site. |
| `assets/` | Ressources source et documentation associée. |
| `server/` | Serveur de diffusion de la production. |
