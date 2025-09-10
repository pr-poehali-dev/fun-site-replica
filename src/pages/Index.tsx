import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const GAME_CATEGORIES = [
  { id: 'all', name: 'Все игры', icon: 'Gamepad2' },
  { id: 'action', name: 'Экшн', icon: 'Zap' },
  { id: 'puzzle', name: 'Головоломки', icon: 'Puzzle' },
  { id: 'strategy', name: 'Стратегии', icon: 'Target' },
  { id: 'arcade', name: 'Аркады', icon: 'Trophy' },
  { id: 'racing', name: 'Гонки', icon: 'Car' }
];

const GAMES_DATA = [
  {
    id: 1,
    title: 'Space Invaders',
    category: 'arcade',
    description: 'Классическая аркада про защиту от пришельцев',
    players: '1.2M',
    rating: 4.8,
    image: '/placeholder.svg',
    tags: ['Ретро', 'Космос']
  },
  {
    id: 2,
    title: 'Tetris Revolution',
    category: 'puzzle',
    description: 'Современная версия легендарной головоломки',
    players: '890K',
    rating: 4.9,
    image: '/placeholder.svg',
    tags: ['Классика', 'Логика']
  },
  {
    id: 3,
    title: 'Racing Thunder',
    category: 'racing',
    description: 'Адреналиновые гонки на супер-скорости',
    players: '2.1M',
    rating: 4.7,
    image: '/placeholder.svg',
    tags: ['Скорость', '3D']
  },
  {
    id: 4,
    title: 'Kingdom Defense',
    category: 'strategy',
    description: 'Защити свое королевство от вражеских атак',
    players: '1.5M',
    rating: 4.6,
    image: '/placeholder.svg',
    tags: ['Тактика', 'Средневековье']
  },
  {
    id: 5,
    title: 'Ninja Strike',
    category: 'action',
    description: 'Стань мастером ниндзя и победи всех врагов',
    players: '750K',
    rating: 4.5,
    image: '/placeholder.svg',
    tags: ['Боевик', 'Япония']
  },
  {
    id: 6,
    title: 'Crystal Match',
    category: 'puzzle',
    description: 'Собирай кристаллы в захватывающих комбинациях',
    players: '950K',
    rating: 4.4,
    image: '/placeholder.svg',
    tags: ['Логика', 'Магия']
  }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGames = GAMES_DATA.filter(game => {
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" className="text-primary-foreground" size={24} />
              </div>
              <h1 className="text-2xl font-orbitron font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                GamePortal
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Профиль
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Heart" size={16} className="mr-2" />
                Избранное
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 animate-pulse"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-orbitron font-black mb-6 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-fade-in">
            ИГРАЙ СЕЙЧАС
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Тысячи бесплатных браузерных игр ждут тебя. Никаких загрузок — просто играй!
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8 animate-scale-in">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Найти игру..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="flex justify-center space-x-8 text-center animate-fade-in">
            <div>
              <div className="text-2xl font-orbitron font-bold text-accent">10,000+</div>
              <div className="text-sm text-muted-foreground">Игр</div>
            </div>
            <div>
              <div className="text-2xl font-orbitron font-bold text-primary">5M+</div>
              <div className="text-sm text-muted-foreground">Игроков</div>
            </div>
            <div>
              <div className="text-2xl font-orbitron font-bold text-accent">99%</div>
              <div className="text-sm text-muted-foreground">Бесплатно</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Categories */}
        <section className="mb-12">
          <h3 className="text-2xl font-orbitron font-bold mb-6 text-foreground">Категории</h3>
          <div className="flex flex-wrap gap-3">
            {GAME_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2 transition-all duration-200 hover:scale-105"
              >
                <Icon name={category.icon as any} size={16} />
                <span className="font-inter">{category.name}</span>
              </Button>
            ))}
          </div>
        </section>

        {/* Games Grid */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-orbitron font-bold text-foreground">
              {selectedCategory === 'all' ? 'Популярные игры' : GAME_CATEGORIES.find(c => c.id === selectedCategory)?.name}
            </h3>
            <div className="text-sm text-muted-foreground">
              Найдено: {filteredGames.length} игр
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game, index) => (
              <Card 
                key={game.id} 
                className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="bg-background/80 text-foreground">
                        <Icon name="Star" size={12} className="mr-1 text-yellow-500" />
                        {game.rating}
                      </Badge>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="bg-background/80 text-foreground">
                        <Icon name="Users" size={12} className="mr-1" />
                        {game.players}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="font-orbitron text-lg text-foreground group-hover:text-accent transition-colors">
                    {game.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 font-inter">
                    {game.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full font-inter font-medium bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 transition-all duration-200">
                    <Icon name="Play" size={16} className="mr-2" />
                    Играть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        {filteredGames.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="font-inter">
              <Icon name="RotateCcw" size={16} className="mr-2" />
              Загрузить еще игры
            </Button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-border/40 bg-card/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" className="text-primary-foreground" size={20} />
              </div>
              <span className="text-xl font-orbitron font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                GamePortal
              </span>
            </div>
            <p className="text-muted-foreground font-inter">
              © 2024 GamePortal. Все права защищены. Играй и наслаждайся!
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Поддержка
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Shield" size={16} className="mr-2" />
                Политика
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Info" size={16} className="mr-2" />
                О нас
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}